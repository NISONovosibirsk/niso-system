import { useEffect, useRef, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import {
    ClipIcon,
    CommonImageIcon,
    DocumentIcon,
    PlusIcon,
    TrashIcon,
} from '../../../../../../assets';
import { Popup } from '../../../../../support';
import Checkbox from '../Checkbox/Checkbox';

import './OrganizerEditPopup.scss';

const OrganizerEditPopup = ({ isOpen, onClose, event, events, setEvents }) => {
    const [titleIsEditing, setTitleIsEditing] = useState(false);
    const [subtitleIsEditing, setSubtitleIsEditing] = useState(false);
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (titleIsEditing) {
            inputRef.current?.select();
        }
    }, [titleIsEditing]);

    useEffect(() => {
        if (subtitleIsEditing) {
            textAreaRef.current?.select();
        }
    }, [subtitleIsEditing]);

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

    const handleFileType = (attachment, index) => {
        const { type, name } = attachment;
        let src = URL.createObjectURL(attachment);

        const splitFileType = type.split('/');

        switch (splitFileType[0]) {
            case 'image':
                return (
                    <div
                        className='organizer-edit-popup__attachment'
                        key={index}
                    >
                        <img
                            className='organizer-edit-popup__file-image'
                            src={src}
                            alt={name}
                        />
                        <CommonImageIcon className='organizer-edit-popup__file-icon' />
                        <TrashIcon
                            className='organizer-edit-popup__trash-icon'
                            onClick={() => handleDeleteAttachment(index)}
                        />
                    </div>
                );

            default:
                return (
                    <div
                        className='organizer-edit-popup__attachment'
                        key={index}
                    >
                        <p className='organizer-edit-popup__file-name'>
                            {name}
                        </p>
                        <DocumentIcon className='organizer-edit-popup__file-icon' />
                        <TrashIcon
                            className='organizer-edit-popup__trash-icon'
                            onClick={() => handleDeleteAttachment(index)}
                        />
                    </div>
                );
        }
    };

    const handleStartTitleEditing = () => {
        setTitleIsEditing(true);
    };

    const handleStopTitleEditing = e => {
        const { value } = e.target;
        setTitleIsEditing(false);

        if (value.trim()) {
            const eventIndex = events.indexOf(event);
            const newEvent = { ...event, title: value.trim() };
            const newEvents = [...events];
            newEvents[eventIndex] = newEvent;

            setEvents(newEvents);
        }
    };

    const handleTitleKeyPress = e =>
        e.key === 'Enter' && handleStopTitleEditing(e);

    const handleStartSubtitleEditing = () => {
        setSubtitleIsEditing(true);
    };

    const handleStopSubtitleEditing = e => {
        const { value } = e.target;
        setSubtitleIsEditing(false);

        const eventIndex = events.indexOf(event);
        const newEvent = { ...event, subtitle: value.trim() };
        const newEvents = [...events];
        newEvents[eventIndex] = newEvent;

        setEvents(newEvents);
    };

    const handleAttachmentsChange = e => {
        const file = e.target.files[0];

        if (file) {
            const eventIndex = events.indexOf(event);
            const newEvent = {
                ...event,
                attachments: [...event.attachments, file],
            };
            const newEvents = [...events];
            newEvents[eventIndex] = newEvent;

            setEvents(newEvents);
        }
    };

    const handleDeleteAttachment = index => {
        const eventIndex = events.indexOf(event);
        const newAttachments = [...event.attachments];

        newAttachments.splice(index, 1);
        const newEvent = { ...event, attachments: newAttachments };
        const newEvents = [...events];
        newEvents[eventIndex] = newEvent;

        setEvents(newEvents);
    };

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

    const handleCheckboxChange = e => {
        const { checked, id } = e.target;

        const eventIndex = events.indexOf(event);
        const newEvent = { ...event };
        const newEvents = [...events];

        if (checked) {
            newEvent.types = [...newEvent.types, id];
        } else if (newEvent.types.length !== 1) {
            const indexType = newEvent.types.indexOf(id);
            const newTypes = [...newEvent.types];
            newTypes.splice(indexType, 1);

            newEvent.types = newTypes;
        }

        newEvents[eventIndex] = newEvent;
        setEvents(newEvents);
    };

    const handleDeleteEvent = () => {
        const eventIndex = events.indexOf(event);
        const newEvents = [...events];

        newEvents.splice(eventIndex, 1);

        onClose();
        setEvents(newEvents);
    };

    return (
        <Popup isOpen={isOpen} onClose={onClose}>
            <form className='organizer-edit-popup'>
                <div className='organizer-edit-popup__header'>
                    {titleIsEditing ? (
                        <input
                            className='organizer-edit-popup__input'
                            defaultValue={event.title}
                            onBlur={handleStopTitleEditing}
                            onKeyPress={handleTitleKeyPress}
                            ref={inputRef}
                        />
                    ) : (
                        <p
                            className='organizer-edit-popup__title'
                            onClick={handleStartTitleEditing}
                        >
                            {event.title}
                        </p>
                    )}
                    <TrashIcon
                        className='organizer-edit-popup__trash'
                        onClick={handleDeleteEvent}
                    />
                </div>
                <div className='organizer-edit-popup__column'>
                    <label className='organizer-edit-popup__label'>
                        Описание
                        {subtitleIsEditing ? (
                            <ReactTextareaAutosize
                                className='organizer-edit-popup__textarea'
                                defaultValue={event.subtitle}
                                placeholder={'Добавить описание'}
                                onBlur={handleStopSubtitleEditing}
                                ref={textAreaRef}
                                minRows={14}
                            />
                        ) : (
                            <p
                                className='organizer-edit-popup__subtitle'
                                onClick={handleStartSubtitleEditing}
                            >
                                {event.subtitle || 'Добавить описание'}
                            </p>
                        )}
                    </label>
                    <div className='organizer-edit-popup__label'>
                        Вложения
                        <div className='organizer-edit-popup__attachments'>
                            {event.attachments.map((attachment, index) =>
                                handleFileType(attachment, index)
                            )}
                            <label className='organizer-edit-popup__attachment'>
                                <PlusIcon className='organizer-edit-popup__plus-icon' />
                                <ClipIcon className='organizer-edit-popup__clip' />
                                <input
                                    className='organizer-edit-popup__file-upload'
                                    type='file'
                                    onChange={handleAttachmentsChange}
                                    accept='.doc,.exel,.pdf,.jpeg,.jpg,.png'
                                />
                            </label>
                        </div>
                    </div>
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
                    <Checkbox
                        title={'Мониторинг'}
                        isChecked={event.types.includes('Мониторинг')}
                        onChange={handleCheckboxChange}
                    />
                    <Checkbox
                        title={'Анкетирование'}
                        isChecked={event.types.includes('Анкетирование')}
                        onChange={handleCheckboxChange}
                    />
                    <Checkbox
                        title={'Конференции'}
                        isChecked={event.types.includes('Конференции')}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </form>
        </Popup>
    );
};

export default OrganizerEditPopup;
