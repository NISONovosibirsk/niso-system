import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    updateCreatedReports,
    updateTargetReport,
} from '../../../../../../../../store/actions/userConstrucorActions';
import { Button } from '../../../../../../../support';
import './SchoolsListItem.scss';

const SchoolsListItem = ({ school }) => {
    const { reports, targetReport } = useTypeSelector(
        state => state.userConstructor.createdReports
    );
    const [reportIndex, setReportIndex] = useState(-1);
    const [schoolInTargets, setSchoolInTargets] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setReportIndex(reports.indexOf(targetReport));
        setSchoolInTargets(
            targetReport.targets?.find(target => target.id === school.id)
        );
    }, [reports, targetReport, school.id]);

    const handleSend = () => {
        let reportsCopy = [...reports];

        reportsCopy[reportIndex] = {
            ...reportsCopy[reportIndex],
            targets: [...reportsCopy[reportIndex].targets, school],
        };

        localStorage.setItem(
            'createdReports',
            JSON.stringify([...reportsCopy])
        );

        dispatch(updateTargetReport(reportsCopy[reportIndex]));
        dispatch(updateCreatedReports([...reportsCopy]));
    };

    const handleReject = () => {
        let reportsCopy = [...reports];
        let targetsCopy = [...reportsCopy[reportIndex].targets];

        targetsCopy.splice(
            reports[reportIndex].targets.indexOf(schoolInTargets),
            1
        );

        reportsCopy[reportIndex] = {
            ...reportsCopy[reportIndex],
            targets: [...targetsCopy],
        };

        localStorage.setItem(
            'createdReports',
            JSON.stringify([...reportsCopy])
        );

        dispatch(updateTargetReport(reportsCopy[reportIndex]));
        dispatch(updateCreatedReports([...reportsCopy]));
    };

    return (
        <li className='schools-list-item'>
            <p className='schools-list-item__title'>
                {school.name}, {school.address.street}
            </p>
            {schoolInTargets ? (
                <Button
                    title='Отозвать'
                    onClick={handleReject}
                    type='light-red'
                    width='150px'
                    height='32px'
                    margin='8px 0'
                />
            ) : (
                <Button
                    title='Отправить'
                    onClick={handleSend}
                    width='150px'
                    height='32px'
                    margin='8px 0'
                />
            )}
        </li>
    );
};

export default SchoolsListItem;
