import './CheckboxInput.scss';

const CheckboxInput = ({ element, onChangeItemValue, index }) => {
    const handleChange = e => {
        const { value, checked, type } = e.target;

        type === 'checkbox'
            ? (element.isChecked = checked)
            : (element.value = value);

        onChangeItemValue(element, index);
    };

    return (
        <label className='checkbox-input'>
            <input
                className='checkbox-input__input'
                type='checkbox'
                checked={element.isChecked}
                onChange={handleChange}
            />
            <div className='checkbox-input__custom-checkbox'></div>
            <input
                className='report-create-item__input report-create-item__input_underline'
                value={element.value}
                placeholder={element.placeholder}
                onChange={handleChange}
            />
        </label>
    );
};

export default CheckboxInput;
