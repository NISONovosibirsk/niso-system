import './ReportText.scss';

const ReportText = ({ element }) => {
    return (
        <>
            {element.type === 'text' ? (
                <div className='report-text__field'>
                    {element.values.map(value => (
                        <p className='report-text report-text_text'>{value}</p>
                    ))}
                </div>
            ) : (
                <p className={`report-text report-text_${element.type}`}>
                    {element.value}
                </p>
            )}
        </>
    );
};

export default ReportText;
