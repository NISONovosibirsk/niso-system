import { memo, useEffect, useState } from 'react';
import { getNumberOfDaysInAMonth } from '../../../../../../middleware';

import './OrganizerEvent.scss';

const OrganizerEvent = ({ event, date }) => {
    const [style, setStyle] = useState({
        background: event.color,
        gridColumn: '',
    });

    useEffect(() => {
        const { startDate, endDate } = event;

        const curYear = date.getFullYear();
        const curMonth = date.getMonth();

        let gridColumnStart = event.startDate.getDate();
        let gridColumnSpan = 1;

        if (startDate.getMonth() >= curMonth) {
            gridColumnStart += getNumberOfDaysInAMonth(curYear, curMonth - 1);

            if (startDate.getMonth() > curMonth) {
                gridColumnStart += getNumberOfDaysInAMonth(curYear, curMonth);
            }
        }

        if (startDate.getMonth() === endDate.getMonth()) {
            gridColumnSpan += endDate.getDate() - startDate.getDate();
        } else {
            gridColumnSpan +=
                getNumberOfDaysInAMonth(curYear, startDate.getMonth()) -
                startDate.getDate() +
                endDate.getDate();
        }

        const gridColumn = gridColumnStart + ' / span ' + gridColumnSpan;

        setStyle({ ...style, gridColumn });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event, date]);

    return (
        <div className='organizer-event' style={style}>
            {event.title}
        </div>
    );
};

const MemodOrganizerEvent = memo(OrganizerEvent);

export default MemodOrganizerEvent;
