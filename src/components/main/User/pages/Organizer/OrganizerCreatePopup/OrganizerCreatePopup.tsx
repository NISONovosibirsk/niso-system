import { useEffect, useState } from 'react';
import { Button, Popup } from '../../../../../support';
import Checkbox from '../Checkbox/Checkbox';

import './OrganizerCreatePopup.scss';

const OrganizerCreatePopup = ({ onClose, isOpen, onCreateEvent }) => {
    const [isValid, setIsValid] = useState(false);
    const [startDateInput, setStartDateInput] = useState('');
    const [endDateInput, setEndDateInput] = useState('');
    const [values, setValues] = useState({
        title: '',
        color: '',
        types: [] as string[],
    } as {
        title: string;
        startDate: Date;
        endDate: Date;
        color: string;
        types: string[];
        subtitle: string;
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
            types: ['Мониторинг'],
            subtitle: '',
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

    const handleCheckboxChange = e => {
        const { checked, id } = e.target;
        const newTypes = [...values.types];

        if (checked) {
            newTypes.push(id);
        } else {
            const indexType = values.types.indexOf(id);
            newTypes.splice(indexType, 1);
        }

        setValues({ ...values, types: newTypes });
        setIsValid(
            e.target.closest('form').checkValidity() && newTypes.length
                ? true
                : false
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        onCreateEvent(values);
        onClose();
        setIsValid(false);
    };

    return (
        <Popup onClose={onClose} isOpen={isOpen}>
            <form className='organizer-create-popup' onSubmit={handleSubmit}>
                <p className='organizer-create-popup__title'>
                    Создание события
                </p>
                <label
                    className='organizer-create-popup__label'
                    htmlFor='title'
                >
                    Название
                </label>
                <input
                    className='organizer-create-popup__input'
                    id='title'
                    placeholder='Введите название события'
                    onChange={handleTitleChange}
                    value={values.title}
                    required
                />
                <label
                    className='organizer-create-popup__label'
                    htmlFor='startDate'
                >
                    Дата начала
                </label>
                <input
                    className='organizer-create-popup__input'
                    id='startDate'
                    type='date'
                    value={startDateInput}
                    max={endDateInput}
                    onChange={handleStartDateChange}
                    required
                />
                <label
                    className='organizer-create-popup__label'
                    htmlFor='endDate'
                >
                    Дата окончания
                </label>
                <input
                    className='organizer-create-popup__input'
                    id='endDate'
                    type='date'
                    value={endDateInput}
                    min={startDateInput}
                    onChange={handleEndDateChange}
                    required
                />
                <label
                    className='organizer-create-popup__label'
                    htmlFor='color'
                >
                    Цвет
                </label>
                <input
                    className='organizer-create-popup__input organizer-create-popup__input_color'
                    id='color'
                    type='color'
                    onChange={handleColorChange}
                    value={values.color}
                    required
                />
                <Checkbox
                    title={'Мониторинг'}
                    isChecked={values.types.includes('Мониторинг')}
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    title={'Анкетирование'}
                    isChecked={values.types.includes('Анкетирование')}
                    onChange={handleCheckboxChange}
                />
                <Checkbox
                    title={'Конференции'}
                    isChecked={values.types.includes('Конференции')}
                    onChange={handleCheckboxChange}
                />
                <Button
                    title='Создать'
                    height='32px'
                    margin='12px 0 0 0'
                    isDisabled={!isValid}
                />
            </form>
        </Popup>
    );
};

export default OrganizerCreatePopup;
