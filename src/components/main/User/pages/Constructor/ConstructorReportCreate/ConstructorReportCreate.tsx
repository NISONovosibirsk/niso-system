import { Route, Routes } from 'react-router-dom';
import './ConstructorReportCreate.scss';
import ReportCreate from './ReportCreate/ReportCreate';
import ConstructorBreadcrumbs from './ConstructorBreadcrumbs/ConstructorBreadcrumbs';

const ConstructorReportCreate = () => {
    return (
        <div className='constructor-report-create'>
            <ConstructorBreadcrumbs />
            <Routes>
                <Route path='create' element={<ReportCreate />} />
                <Route path='preview' element={<ReportCreate />} />
                <Route path='approve' element={<ReportCreate />} />
            </Routes>
        </div>
    );
};

export default ConstructorReportCreate;
