import './ReportRadio.scss';

const ReportRadio = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = radioIndex => {
        element.radios.forEach(radio => (radio.isChecked = false));
        element.radios[radioIndex].isChecked = true;

        onUpdateElement(element, elementIndex);
    };

    return (
        <ul className='report-radio'>
            {element.radios.map((radio, radioIndex) => (
                <li className='report-radio__item' key={radioIndex}>
                    <label className='report-radio__label'>
                        <input
                            className='report-radio__input'
                            type='radio'
                            checked={radio.isChecked}
                            onChange={() => handleChange(radioIndex)}
                        />
                        <div className='report-radio__custom-radio'></div>
                        <p className='report-radio__title'>{radio.title}</p>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default ReportRadio;
