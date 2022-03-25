import './ReportInput.scss';

const ReportInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = e => {
        const { value, validationMessage } = e.target;

        element.value = value;
        element.error = validationMessage;

        onUpdateElement(element, elementIndex);
    };

    return (
        <>
            <input
                className={`report-input ${
                    element.error ? 'report-input_invalid' : ''
                }`}
                list={elementIndex}
                value={element.value}
                placeholder={element.placeholder}
                onChange={handleChange}
                required={element.isRequired}
                type={element.type}
            />
            <span className='report-input__error'>{element.error}</span>
            {element.options ? (
                <datalist id={elementIndex}>
                    {element.options.map((option, optionIndex) => (
                        <option value={option} key={optionIndex} />
                    ))}
                </datalist>
            ) : (
                ''
            )}
        </>
    );
};

export default ReportInput;
