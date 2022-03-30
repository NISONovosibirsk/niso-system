import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import {
    resetCreate,
    setIsValid,
    updateCreateSubtitle,
    updateCreateTitle,
} from '../../../../../../../store/actions/userConstrucorActions';
import { Button } from '../../../../../../support';
import ReportCreateElementsField from './ReportCreateElementsField/ReportCreateElementsField';
import './ReportCreate.scss';

const ReportCreate = () => {
    const { title, subtitle, isValid, elements } = useTypeSelector(
        state => state.userConstructor.create
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (title.value && subtitle.value && elements.length) {
            dispatch(setIsValid(true));
        } else {
            dispatch(setIsValid(false));
        }
    }, [elements, dispatch, title.value, subtitle.value]);

    const handleChange = e => {
        const { name, value, validationMessage } = e.target;

        switch (name) {
            case 'title':
                dispatch(
                    updateCreateTitle({ value, error: validationMessage })
                );
                break;
            case 'subtitle':
                dispatch(
                    updateCreateSubtitle({ value, error: validationMessage })
                );
                break;

            default:
                break;
        }
    };

    const handleCancelClick = e => {
        e.preventDefault();

        dispatch(resetCreate());
        navigate('/user/constructor');
    };

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/user/constructor/report-create/preview');
    };

    return (
        <form className='report-create' onSubmit={handleSubmit}>
            <label className='report-create__label' htmlFor='title'>
                Название отчета
            </label>
            <input
                className={`report-create__input ${
                    title.error ? 'report-create__input_invalid' : ''
                }`}
                onChange={handleChange}
                value={title.value}
                id='title'
                name='title'
                required
            ></input>
            <span className='report-create__error'>{title.error}</span>
            <label className='report-create__label' htmlFor='subtitle'>
                Описание отчета
            </label>
            <input
                className={`report-create__input ${
                    subtitle.error ? 'report-create__input-invalid' : ''
                }`}
                onChange={handleChange}
                value={subtitle.value}
                id='subtitle'
                name='subtitle'
                required
            ></input>
            <span className='report-create__error'>{subtitle.error}</span>
            <ReportCreateElementsField elements={elements} />
            <div className='report-create__buttons'>
                <Button
                    onClick={handleCancelClick}
                    title='Назад'
                    type='light-grey'
                />
                <Button title='Далее' isDisabled={!isValid} />
            </div>
        </form>
    );
};

export default ReportCreate;
