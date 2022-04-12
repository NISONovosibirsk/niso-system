import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import './ReportsList.scss';
import ReportsItem from '../ReportsItem/ReportsItem';

const ReportsList = () => {
    const { reports } = useTypeSelector(
        state => state.userConstructor.createdReports
    );

    return (
        <ul className='reports-list'>
            {reports.map((report, index) => (
                <ReportsItem report={report} index={index} key={index} />
            ))}
        </ul>
    );
};

export default ReportsList;
