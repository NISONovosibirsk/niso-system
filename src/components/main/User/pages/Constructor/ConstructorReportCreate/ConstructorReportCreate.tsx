import { Route, Routes } from 'react-router-dom';
import './ConstructorReportCreate.scss';
import ReportCreate from './ReportCreate/ReportCreate';
import ReportPreview from './ReportPreview/ReportPreview';
import ConstructorBreadcrumbs from './ConstructorBreadcrumbs/ConstructorBreadcrumbs';

const ConstructorReportCreate = () => {
    return (
        <div className='constructor-report-create'>
            <ConstructorBreadcrumbs />
            <Routes>
                <Route path='create' element={<ReportCreate />} />
                <Route path='preview' element={<ReportPreview />} />
                <Route path='send' element={<ReportCreate />} />
            </Routes>
        </div>
    );
};

export default ConstructorReportCreate;
