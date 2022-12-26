import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import {
    setIsValid,
    updateCreateDeadlineDate,
    updateCreateSubtitle,
    updateCreateTitle,
} from '../../../../../../../store/actions/userConstrucorActions';
import ReportCreateElementsField from './ReportCreateElementsField/ReportCreateElementsField';
import './ReportCreate.scss';

const ReportCreate = () => {
    const { title, subtitle, deadlineDate, elements } = useTypeSelector(
        state => state.userConstructor.create
    );
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

            case 'deadlineDate':
                dispatch(updateCreateDeadlineDate(value));
                break;

            default:
                break;
        }
    };

    return (
        <form className='report-create'>
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
            <TextareaAutosize
                className={`report-create__input ${
                    subtitle.error ? 'report-create__input-invalid' : ''
                }`}
                onChange={handleChange}
                value={subtitle.value}
                id='subtitle'
                name='subtitle'
                required
                minRows={1}
                maxRows={3}
            />
            <span className='report-create__error'>{subtitle.error}</span>
            <label className='report-create__label' htmlFor='deadlineDate'>
                Крайний срок
            </label>
            <input
                className='report-create__input'
                type='date'
                onChange={handleChange}
                value={deadlineDate}
                min={new Date().toLocaleDateString('en-ca')}
                id='deadlineDate'
                name='deadlineDate'
                required
            ></input>
            <ReportCreateElementsField elements={elements} />
        </form>
    );
};

export default ReportCreate;
