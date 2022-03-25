import './ReportTextList.scss';

const ReportTextList = ({ element }) => {
    return (
        <ul className='report-text-list'>
            {element.values.map(value => (
                <li className='report-text-list__item'>{value}</li>
            ))}
        </ul>
    );
};

export default ReportTextList;
