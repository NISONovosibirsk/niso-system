import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import {
    getPrettyDate,
    renderReportElement,
} from '../../../../../../../middleware';
import './ReportPreview.scss';

const ReportPreview = () => {
    const { title, subtitle, elements } = useTypeSelector(
        state => state.userConstructor.create
    );

    const user = {
        name: 'Петр Петров',
    };

    return (
        <div className='report-preview'>
            <h2 className='report-preview__title'>{title.value}</h2>
            <p className='report-preview__date'>{getPrettyDate(Date.now())}</p>
            <p className='report-preview__author'>
                От: <span>{user.name}</span>
            </p>
            <p className='report-preview__subtitle'>{subtitle.value}</p>
            <ul className='report-preview__list'>
                {elements.map((element, elementIndex) => (
                    <li className='report-preview__item' key={elementIndex}>
                        {renderReportElement(element, () => {}, elementIndex)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportPreview;
