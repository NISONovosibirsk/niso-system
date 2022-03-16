import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import {
    setIsOpen,
    setIsValid,
    updateCreateSubtitle,
    updateCreateTitle,
} from '../../../../../../../store/actions/userConstrucorActions';
import { Button } from '../../../../../../support';
import ReportCreateList from '../ReportCreateList/ReportCreateList';
import ReportCreatePopup from '../ReportCreatePopup/ReportCreatePopup';
import './ReportCreate.scss';

const ReportCreate = () => {
    const { title, subtitle, isValid, elements } = useTypeSelector(
        state => state.userConstructor.create
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

        dispatch(setIsValid(e.target.closest('form').checkValidity()));
    };

    const handleCancelClick = e => {
        e.preventDefault();
        navigate('/user/constructor');
    };

    const handleAddElements = e => {
        e.preventDefault();
        dispatch(setIsOpen(true));
    };

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/user/constructor/report-create/preview');
    };

    return (
        <form className='report-create' onSubmit={handleSubmit}>
            <h2 className='report-create__title'>Создание формы отчетности</h2>
            <label className='report-create__label' htmlFor='title'>
                Название
            </label>
            <input
                className={`report-create__input ${
                    title.error ? 'report-create__input-invalid' : ''
                }`}
                onChange={handleChange}
                value={title.value}
                id='title'
                name='title'
                required
            ></input>
            <span className='report-create__error'>{title.error}</span>
            <label className='report-create__label' htmlFor='subtitle'>
                Описание
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
            <div className='report-create__elements-field'>
                <ReportCreateList elements={elements} />
                <Button
                    title='Добавить поле'
                    onClick={handleAddElements}
                    height='28px'
                    margin={'auto 0 0'}
                />
                <ReportCreatePopup />
            </div>
            <div className='report-create__buttons-field'>
                <Button
                    onClick={handleCancelClick}
                    title='Отмена'
                    width='150px'
                    type='light-grey'
                />
                <Button title='Сохранить' width='150px' isDisabled={!isValid} />
            </div>
        </form>
    );
};

export default ReportCreate;
