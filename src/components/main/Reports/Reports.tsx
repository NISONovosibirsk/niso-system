import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { SendFormPopup } from '..';
import { Filter } from '../../support';
import './Reports.scss';
import ReportFormItem from './ReportsFormsItem/ReportsFormsItem';

const Reports = () => {
    const { forms } = useTypeSelector(state => state.reportsFormsList);

    return (
        <section className='reports'>
            <Filter />
            <ul className='reports__forms-list'>
                {forms.map((reportForm, index) => (
                    <ReportFormItem
                        key={index}
                        index={index}
                        reportForm={reportForm}
                    />
                ))}
            </ul>
            <SendFormPopup />
        </section>
    );
};

export default Reports;
