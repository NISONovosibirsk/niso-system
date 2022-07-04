import './ReportTextList.scss';

const ReportTextList = ({ element }) => {
    return (
        <ul className='report-text-list'>
            {element.values.map((value, index) => (
                <li key={index} className='report-text-list__item'>
                    <p>{value}</p>
                </li>
            ))}
        </ul>
    );
};

export default ReportTextList;
