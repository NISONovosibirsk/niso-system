import { Button } from '../../../../../support';
import ConstructorFilterTabs from './ReportsFilterTabs/ReportsFilterTabs';
import ReportsSearchbar from './ReportsSearchbar/ReportsSearchbar';
import ReportsList from './ReportsList/ReportsList';
import './ConstructorReports.scss';
import { useNavigate } from 'react-router-dom';

const ConstructorReports = () => {
    const navigate = useNavigate();

    const handleCreateReport = () => {
        navigate('report-create/create');
    };

    return (
        <div className='constructor-reports'>
            <ReportsSearchbar />
            <Button
                title='Статистика'
                height='48px'
                width='150px'
                margin='0 8px 0 16px'
                type='light-grey'
            />
            <Button
                onClick={handleCreateReport}
                title='Создать отчет'
                height='48px'
                width='150px'
                margin='0 16px 0 8px'
            />
            <ConstructorFilterTabs />
            <ReportsList />
        </div>
    );
};

export default ConstructorReports;
