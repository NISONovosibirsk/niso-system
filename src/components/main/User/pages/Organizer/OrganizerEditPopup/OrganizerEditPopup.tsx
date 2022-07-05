import { useEffect, useRef, useState } from 'react';
import { Popup } from '../../../../../support';
import Checkbox from './Checkbox/Checkbox';

import './OrganizerEditPopup.scss';

const OrganizerEditPopup = ({ isOpen, onClose, event, events, setEvents }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.select();
        }
    }, [isEditing]);

    useEffect(() => {
        const { startDate, endDate } = event;

        const startYear = startDate.getFullYear();
        const startMonth =
            String(startDate.getMonth() + 1).length > 1
                ? startDate.getMonth() + 1
                : '0' + (startDate.getMonth() + 1);
        const startDay =
            String(startDate.getDate()).length > 1
                ? startDate.getDate()
                : '0' + startDate.getDate();

        const startInputDate = startYear + '-' + startMonth + '-' + startDay;

        const endYear = endDate.getFullYear();
        const endMonth =
            String(endDate.getMonth() + 1).length > 1
                ? endDate.getMonth() + 1
                : '0' + (endDate.getMonth() + 1);
        const endDay =
            String(endDate.getDate()).length > 1
                ? endDate.getDate()
                : '0' + endDate.getDate();

        const endInputDate = endYear + '-' + endMonth + '-' + endDay;

        setStartDateInput(startInputDate);
        setEndDateInput(endInputDate);
    }, [event]);

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleStopEditing = e => {
        const { value } = e.target;
        setIsEditing(false);

        if (value.trim()) {
            const eventIndex = events.indexOf(event);
            const newEvent = { ...event, title: value.trim() };
            const newEvents = [...events];
            newEvents[eventIndex] = newEvent;

            setEvents(newEvents);
            return;
        }
    };

    const handleKeyPress = e => e.key === 'Enter' && handleStopEditing(e);

    const handleStartDateChange = e => {
        const { value } = e.target;

        const eventIndex = events.indexOf(event);
        const newEvent = { ...event, startDate: new Date(value) };
        const newEvents = [...events];
        newEvents[eventIndex] = newEvent;

        setEvents(newEvents);
        setStartDateInput(value);
    };

    const handleEndDateChange = e => {
        const { value } = e.target;

        const eventIndex = events.indexOf(event);
        const newEvent = { ...event, endDate: new Date(value) };
        const newEvents = [...events];
        newEvents[eventIndex] = newEvent;

        setEvents(newEvents);
        setEndDateInput(value);
    };

    const handleColorChange = e => {
        const { value } = e.target;

        const eventIndex = events.indexOf(event);
        const newEvent = { ...event, color: value };
        const newEvents = [...events];
        newEvents[eventIndex] = newEvent;

        setEvents(newEvents);
    };

    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <form className='organizer-edit-popup'>
                <div className='organizer-edit-popup__column'>
                    {isEditing ? (
                        <input
                            className='organizer-edit-popup__input'
                            defaultValue={event.title}
                            onBlur={handleStopEditing}
                            onKeyPress={handleKeyPress}
                            ref={inputRef}
                        />
                    ) : (
                        <p
                            className='organizer-edit-popup__title'
                            onClick={handleStartEditing}
                        >
                            {event.title}
                        </p>
                    )}
                </div>
                <div className='organizer-edit-popup__column'>
                    <label className='organizer-edit-popup__label'>
                        Дата начала
                        <input
                            className='organizer-edit-popup__input'
                            type='date'
                            value={startDateInput}
                            max={endDateInput}
                            onChange={handleStartDateChange}
                            required
                        />
                    </label>
                    <label className='organizer-edit-popup__label'>
                        Дата окончания
                        <input
                            className='organizer-edit-popup__input'
                            type='date'
                            value={endDateInput}
                            min={startDateInput}
                            onChange={handleEndDateChange}
                            required
                        />
                    </label>
                    <input
                        className='organizer-edit-popup__input'
                        onChange={handleColorChange}
                        value={event.color}
                        type='color'
                    />
                    <Checkbox title={'Мониторинг'} />
                    <Checkbox title={'Анкетирование'} />
                    <Checkbox title={'Конференции'} />
                </div>
            </form>
        </Popup>
    );
};

export default OrganizerEditPopup;
