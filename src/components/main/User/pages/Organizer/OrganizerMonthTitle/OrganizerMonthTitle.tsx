import { memo, useEffect, useRef, useState } from 'react';
import { getNumberOfDaysInAMonth } from '../../../../../../middleware';

import './OrganizerMonthTitle.scss';

let OrganizerMonthTitle = ({ scroll, year, month }) => {
    const MonthRef = useRef<HTMLParagraphElement>(null);
    const [MonthWidth, setMonthWidth] = useState(0);
    const [style, setStyle] = useState({});

    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    useEffect(() => {
        if (null !== MonthRef.current) {
            setMonthWidth(MonthRef.current.getBoundingClientRect().width);
        }
    }, [month]);

    useEffect(() => {
        const gridColumn = 'span ' + getNumberOfDaysInAMonth(year, month);
        let margin;
        let position;

        if (scroll > getNumberOfDaysInAMonth(year, month) * 58 - MonthWidth) {
            position = 'static';
            margin = '0 0 0 auto';
        } else {
            position = 'sticky';
            margin = '';
        }

        setStyle({
            ...style,
            gridColumn,
            position,
            margin,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scroll, MonthWidth]);

    return (
        <p className='organizer-month-title' ref={MonthRef} style={style}>
            {monthNames[month]}
        </p>
    );
};

const MemodOrganizerMonthTitle = memo(OrganizerMonthTitle);

export default MemodOrganizerMonthTitle;
