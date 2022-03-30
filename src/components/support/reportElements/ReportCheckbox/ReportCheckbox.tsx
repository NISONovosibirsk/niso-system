import './ReportCheckbox.scss';

const ReportCheckbox = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = e => {
        const { checked } = e.target;

        element.isChecked = checked;

        onUpdateElement(element, elementIndex);
    };

    return (
        <label className='report-checkbox'>
            <input
                className='report-checkbox__input'
                type='checkbox'
                checked={element.isChecked}
                onChange={handleChange}
                required={element.isRequired}
            />
            <div className='report-checkbox__custom-checkbox'></div>
            <p className='report-checkbox__title'>{element.title}</p>
        </label>
    );
};

export default ReportCheckbox;
