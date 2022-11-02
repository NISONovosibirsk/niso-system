import { memo, useEffect, useState } from 'react';
import { getNumberOfDaysInAMonth } from '../../../../../../middleware';
import OrganizerEditPopup from '../OrganizerEditPopup/OrganizerEditPopup';

import './OrganizerEvent.scss';

const OrganizerEvent = ({ event, date, events, setEvents }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState({
        background: event.color,
        gridColumn: '',
    });

    useEffect(() => {
        const { startDate, endDate } = event;

        const background = event.color;
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

        setStyle({ ...style, background, gridColumn });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event, date]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='organizer-event' style={style} onClick={handleOpen}>
                {event.title}
                <small><b>Основание:</b> {event.subtitle}</small>
            </div>
            {isOpen ? (
                <OrganizerEditPopup
                    isOpen={isOpen}
                    onClose={handleClose}
                    event={event}
                    events={events}
                    setEvents={setEvents}
                />
            ) : null}
        </>
    );
};

const MemodOrganizerEvent = memo(OrganizerEvent);

export default MemodOrganizerEvent;
