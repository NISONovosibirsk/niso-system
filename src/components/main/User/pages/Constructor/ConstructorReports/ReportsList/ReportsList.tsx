import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import './ReportsList.scss';
import ReportsItem from '../ReportsItem/ReportsItem';

const ReportsList = () => {
    const { forms } = useTypeSelector(state => state.reportsFormsList);

    return (
        <ul className='reports-list'>
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
            <ReportsItem />
        </ul>
        // <SendFormPopup />
    );
};

export default ReportsList;
