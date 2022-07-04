import './ReportsItem.scss';
import {
    CopyIcon,
    DownloadIcon,
    EditIcon,
    ReplyIcon,
    TrashIcon,
} from '../../../../../../../assets';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setDownloadIsOpen,
    setPopupIsOpen,
    updateCreatedReports,
    updateCreateForEdit,
    updateTargetReport,
} from '../../../../../../../store/actions/userConstrucorActions';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { useNavigate } from 'react-router-dom';
import { getPrettyDate } from '../../../../../../../middleware';
import { Button } from '../../../../../../support';
import AcceptPopup from '../../../../../AcceptPopup/AcceptPopup';

const ReportsItem = ({ report, index }) => {
    const { reports } = useTypeSelector(
        state => state.userConstructor.createdReports
    );
    const [isOpen, setIsOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenPopup = e => {
        e.stopPropagation();
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleReportClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = e => {
        e.stopPropagation();

        dispatch(setPopupIsOpen(true));
        dispatch(updateTargetReport(report));
    };

    const handleEdit = () => {
        navigate('report-create');
        dispatch(updateCreateForEdit({ ...report }));
    };

    const hanldeCopy = e => {
        e.stopPropagation();

        const createdReports = [
            {
                ...report,
                id: Date.now(),
                date: getPrettyDate(Date.now()),
                editDate: '',
                title: {
                    ...report.title,
                    value: report.title.value + ' (Копия)',
                },
                targets: [],
            },
            ...reports,
        ];

        localStorage.setItem(
            'createdReports',
            JSON.stringify([...createdReports])
        );

        dispatch(updateCreatedReports([...createdReports]));
    };

    const handleDownload = e => {
        e.stopPropagation();
        dispatch(updateTargetReport(report));
        dispatch(setDownloadIsOpen(true));
    };

    const handleDelete = e => {
        e.stopPropagation();

        let createdReports = [...reports];
        createdReports.splice(index, 1);

        localStorage.setItem(
            'createdReports',
            JSON.stringify([...createdReports])
        );

        handleClosePopup();
        setIsDelete(true);

        setTimeout(setIsDelete, 300, false);
        setTimeout(dispatch, 300, updateCreatedReports([...createdReports]));
    };

    const handleRejectSend = (e, targetIndex) => {
        e.stopPropagation();

        let createdReports = [...reports];
        let targetsCopy = [...report.targets];

        targetsCopy.splice(targetIndex, 1);

        createdReports[index] = {
            ...createdReports[index],
            targets: [...targetsCopy],
        };

        localStorage.setItem(
            'createdReports',
            JSON.stringify([...createdReports])
        );

        dispatch(updateCreatedReports([...createdReports]));
    };

    return (
        <li className={`reports-item ${isDelete ? 'reports-item_delete' : ''}`}>
            <div className='reports-item__content' onClick={handleReportClick}>
                <p
                    className={`reports-item__status ${
                        report.targets.length
                            ? 'reports-item__status_sended'
                            : ''
                    }`}
                ></p>
                <h2 className='reports-item__title'>{report.title.value}</h2>
                <ReplyIcon
                    className='reports-item__icon'
                    onClick={handleSend}
                />
                <EditIcon className='reports-item__icon' onClick={handleEdit} />
                <CopyIcon className='reports-item__icon' onClick={hanldeCopy} />
                <DownloadIcon
                    className='reports-item__icon'
                    onClick={handleDownload}
                />
                <TrashIcon
                    className='reports-item__icon'
                    onClick={handleOpenPopup}
                />
                <p className='reports-item__info'>Крайний срок:</p>
                <p className='reports-item__info-status'>
                    {report.deadlineDate ? report.deadlineDate : 'Не задан'}
                </p>
                <p className='reports-item__info'>
                    {report.editDate ? 'Отредактирован:' : 'Создан:'}
                </p>
                <p className='reports-item__info-status'>
                    {report.editDate ? report.editDate : report.date}
                </p>
                {isOpen ? (
                    <ul className='reports-item__targets'>
                        {report.targets.length ? (
                            report.targets.map((target, targetIndex) => (
                                <li
                                    className='reports-item__target'
                                    key={targetIndex}
                                >
                                    <p className='reports-item__status reports-item__status_sended'></p>
                                    <p className='reports-item__title'>
                                        {target.name}, {target.address.street}
                                    </p>
                                    <Button
                                        title='Отозвать'
                                        onClick={e =>
                                            handleRejectSend(e, targetIndex)
                                        }
                                        type='light-red'
                                        width='100px'
                                        height='24px'
                                    />
                                </li>
                            ))
                        ) : (
                            <Button
                                title='Отправить'
                                onClick={handleSend}
                                type='light-grey'
                                width='92%'
                                height='28px'
                                margin='16px 4%'
                            />
                        )}
                    </ul>
                ) : null}
            </div>
            <AcceptPopup
                title={`Вы уверены, что хотите удалить отчет '${report.title.value}'?`}
                onClick={handleDelete}
                onClose={handleClosePopup}
                isOpen={isPopupOpen}
            />
        </li>
    );
};

export default ReportsItem;
