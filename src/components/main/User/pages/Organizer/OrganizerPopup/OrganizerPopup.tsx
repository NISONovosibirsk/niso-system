import { useEffect, useState } from 'react';
import { Button, Popup } from '../../../../../support';

import './OrganizerPopup.scss';

const OrganizerPopup = ({ onClose, isOpen, onCreateEvent }) => {
    const [isValid, setIsValid] = useState(false);
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [values, setValues] = useState({ title: '', color: '' } as {
        title: string;
        startDate: Date;
        endDate: Date;
        color: string;
    });

    useEffect(() => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        setValues({
            title: '',
            startDate: new Date(),
            endDate: new Date(),
            color,
        });
        const date = new Date();
        const year = date.getFullYear();
        const month =
            String(date.getMonth() + 1).length > 1
                ? date.getMonth() + 1
                : '0' + (date.getMonth() + 1);
        const day =
            String(date.getDate()).length > 1
                ? date.getDate()
                : '0' + date.getDate();
        const inputDate = year + '-' + month + '-' + day;
        setStartDateInput(inputDate);
        setEndDateInput(inputDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleTitleChange = e => {
        const { value } = e.target;
        setValues({ ...values, title: value });
        setIsValid(e.target.closest('form').checkValidity());
    };

    const handleStartDateChange = e => {
        const { value } = e.target;

        setValues({ ...values, startDate: new Date(value) });
        setStartDateInput(value);

        setIsValid(e.target.closest('form').checkValidity());
    };

    const handleEndDateChange = e => {
        const { value } = e.target;

        setValues({ ...values, endDate: new Date(value) });
        setEndDateInput(value);

        setIsValid(e.target.closest('form').checkValidity());
    };

    const handleColorChange = e => {
        const { value } = e.target;
        setValues({ ...values, color: value });
        setIsValid(e.target.closest('form').checkValidity());
    };

    const handleSubmit = e => {
        e.preventDefault();
        onCreateEvent(values);
        onClose();
    };

    return (
        <Popup onClose={onClose} isOpen={isOpen}>
            <form className='organizer-popup' onSubmit={handleSubmit}>
                <p className='organizer-popup__title'>Создание события</p>
                <label className='organizer-popup__label' htmlFor='title'>
                    Название
                </label>
                <input
                    className='organizer-popup__input'
                    id='title'
                    placeholder='Введите название события'
                    onChange={handleTitleChange}
                    value={values.title}
                    required
                />
                <label className='organizer-popup__label' htmlFor='startDate'>
                    Дата начала
                </label>
                <input
                    className='organizer-popup__input'
                    id='startDate'
                    type='date'
                    value={startDateInput}
                    max={endDateInput}
                    onChange={handleStartDateChange}
                    required
                />
                <label className='organizer-popup__label' htmlFor='endDate'>
                    Дата конце
                </label>
                <input
                    className='organizer-popup__input'
                    id='endDate'
                    type='date'
                    value={endDateInput}
                    min={startDateInput}
                    onChange={handleEndDateChange}
                    required
                />
                <label className='organizer-popup__label' htmlFor='color'>
                    Цвет
                </label>
                <input
                    className='organizer-popup__input organizer-popup__input_color'
                    id='color'
                    type='color'
                    onChange={handleColorChange}
                    value={values.color}
                    required
                />
                <Button
                    title='Создать'
                    height='32px'
                    margin='20px 0 0 0'
                    isDisabled={!isValid}
                />
            </form>
        </Popup>
    );
};

export default OrganizerPopup;
