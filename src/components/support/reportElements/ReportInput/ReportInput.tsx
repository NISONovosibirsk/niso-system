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
            <div className='report-input'>
                {/* <p className='report-input__placeholder'>
                    {element.placeholder}
                </p> */}
                {element.values.map(value => (
                    <div className='report-input__inputs-field'>
                        <input
                            className={`report-input__input ${
                                element.error
                                    ? 'report-input__input_invalid'
                                    : ''
                            }`}
                            list={elementIndex}
                            value={value}
                            placeholder={element.placeholder}
                            onChange={handleChange}
                            required={element.isRequired}
                            type={element.type}
                        />
                        <span className='report-input__error'>
                            {element.error}
                        </span>
                    </div>
                ))}
            </div>
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
