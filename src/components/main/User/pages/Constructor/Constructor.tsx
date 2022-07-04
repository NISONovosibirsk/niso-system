import { Navigate, Route, Routes } from 'react-router-dom';
import ConstructorReports from './ConstructorReports/ConstructorReports';
import './Constructor.scss';
import ConstructorReportCreate from './ConstructorReportCreate/ConstructorReportCreate';

const Constructor = () => {
    return (
        <section className='user-constructor'>
            <Routes>
                <Route path='' element={<ConstructorReports />} />
                <Route
                    path='report-create'
                    element={<ConstructorReportCreate />}
                />

                <Route path='*' element={<Navigate to='/404' replace />} />
            </Routes>
        </section>
    );
};

export default Constructor;
