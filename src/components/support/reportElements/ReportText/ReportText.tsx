import './ReportText.scss';

const ReportText = ({ element }) => {
    return (
        <p className={`report-text report-text_${element.type}`}>
            {element.value}
        </p>
    );
};

export default ReportText;
