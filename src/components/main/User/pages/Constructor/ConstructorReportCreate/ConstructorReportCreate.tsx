import ReportCreate from './ReportCreate/ReportCreate';
import ReportPreview from './ReportPreview/ReportPreview';
import './ConstructorReportCreate.scss';
import { Button } from '../../../../../support';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import {
    resetCreate,
    updateCreatedReports,
} from '../../../../../../store/actions/userConstrucorActions';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '../../../../../../assets';
import { useNavigate } from 'react-router-dom';
import { getPrettyDate } from '../../../../../../middleware';
import AcceptPopup from '../../../../AcceptPopup/AcceptPopup';

const ConstructorReportCreate = () => {
    const {
        title,
        subtitle,
        elements,
        isValid,
        date = '',
        id = '',
    } = useTypeSelector(state => state.userConstructor.create);
    const { reports } = useTypeSelector(
        state => state.userConstructor.createdReports
    );
    const [isPreview, setIsPreview] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleResetClick = () => {
        setIsPreview(false);
        handleClosePopup();
        dispatch(resetCreate());
    };

    const showPreview = () => isValid && setIsPreview(true);

    const hidePreview = () => {
        setIsPreview(false);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSaveReport = () => {
        let createdReports = [];
        const json = localStorage.getItem('createdReports');

        if (json !== null) {
            createdReports = JSON.parse(json);
        }

        localStorage.setItem(
            'createdReports',
            JSON.stringify([
                {
                    id: Date.now(),
                    owner: 'Петр Петров',
                    targets: [],
                    date: getPrettyDate(Date.now()),
                    deadlineDate: '',
                    editDate: '',
                    title,
                    subtitle,
                    elements,
                },
                ...createdReports,
            ])
        );

        dispatch(
            updateCreatedReports([
                {
                    id: Date.now(),
                    owner: 'Петр Петров',
                    targets: [],
                    date: getPrettyDate(Date.now()),
                    deadlineDate: '',
                    editDate: '',
                    title,
                    subtitle,
                    elements,
                },
                ...createdReports,
            ])
        );
        handleResetClick();
        handleGoBack();
    };

    const handleCancelEdit = () => {
        handleResetClick();
        handleGoBack();
    };

    const handleSaveEdit = () => {
        const date = new Date();
        let currentReport = reports.find(report => report.id === id);
        const currentReportIndex = reports.indexOf(currentReport);
        const reportsCopy = [...reports];

        currentReport = {
            ...currentReport,
            title,
            subtitle,
            elements,
            editDate:
                getPrettyDate(Date.now()) +
                ' ' +
                date.getHours() +
                ':' +
                date.getMinutes(),
        };

        reportsCopy.splice(currentReportIndex, 1, currentReport);

        localStorage.setItem('createdReports', JSON.stringify(reportsCopy));

        dispatch(updateCreatedReports(reportsCopy));

        handleResetClick();
        handleGoBack();
    };

    return (
        <div className='constructor-report-create'>
            {date ? (
                ''
            ) : (
                <Button
                    title='Очистить'
                    width='80px'
                    height='24px'
                    margin='0 0 0 auto'
                    type='light-red'
                    onClick={handleOpenPopup}
                />
            )}
            {isPreview ? (
                <>
                    <Visibility
                        className='constructor-report-create__visibility'
                        onClick={hidePreview}
                    />
                    <ReportPreview />
                </>
            ) : (
                <>
                    <VisibilityOff
                        className='constructor-report-create__visibility-off'
                        onClick={showPreview}
                    />
                    <ReportCreate />
                </>
            )}
            <div className='constructor-report-create__buttons'>
                {date ? (
                    <>
                        <Button
                            onClick={handleCancelEdit}
                            title='Отменить'
                            type='light-red'
                        />
                        <Button
                            title='Сохранить'
                            onClick={handleSaveEdit}
                            isDisabled={!isValid}
                            width='150px'
                        />
                    </>
                ) : (
                    <>
                        <Button
                            onClick={handleGoBack}
                            title='Назад'
                            type='light-grey'
                        />
                        <Button
                            title='Сохранить'
                            onClick={handleSaveReport}
                            isDisabled={!isValid}
                            width='150px'
                            margin='0 0 0 auto'
                        />
                        <Button
                            title='Сохранить и отправить'
                            isDisabled={!isValid}
                        />
                    </>
                )}
            </div>
            <AcceptPopup
                title='Вы уверены, что хотите очистить форму?'
                onClick={handleResetClick}
                onClose={handleClosePopup}
                isOpen={isPopupOpen}
            />
        </div>
    );
};

export default ConstructorReportCreate;
