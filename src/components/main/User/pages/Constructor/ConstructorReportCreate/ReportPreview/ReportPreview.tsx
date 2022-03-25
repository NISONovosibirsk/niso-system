import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { renderReportElement } from '../../../../../../../middleware';
import { Button } from '../../../../../../support';
import './ReportPreview.scss';

const ReportPreview = () => {
    const navigate = useNavigate();
    const { title, subtitle, elements, isValid } = useTypeSelector(
        state => state.userConstructor.create
    );

    useEffect(() => {
        !isValid && navigate('create');
    });

    const handleDeleteClick = () => {
        alert('Типо успешный запрос на удаление');
    };

    const handleEditClick = () => {
        navigate('/user/constructor/report-create/create');
    };

    const handleSendClick = () => {
        navigate('/user/constructor/report-create/send');
    };

    return (
        <div className='report-preview'>
            <h2 className='report-preview__title'>{title.value}</h2>
            <p className='report-preview__subtitle'>{subtitle.value}</p>
            <ul className='report-preview__list'>
                {elements.map((element, elementIndex) => (
                    <li className='report-preview__item' key={elementIndex}>
                        {renderReportElement(element, () => {}, elementIndex)}
                    </li>
                ))}
            </ul>
            <div className='report-preview__buttons'>
                <Button
                    title='Удалить'
                    type='light-red'
                    onClick={handleDeleteClick}
                />
                <Button
                    title='Редактировать'
                    type='light-grey'
                    onClick={handleEditClick}
                />
                <Button title='Отправить' onClick={handleSendClick} />
            </div>
        </div>
    );
};

export default ReportPreview;
