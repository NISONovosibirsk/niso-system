import './PercentInput.scss';

const PercentInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleInputValueChange = e => {
        const { value, name } = e.target;

        switch (name) {
            case 'cols':
                element.values = [...element.values];

                if (element.values.length < value) {
                    element.values.push('');
                } else if (element.values.length > 1) {
                    element.values.splice(element.values.length - 1, 1);
                }
                break;

            case 'maxValue':
                element.maxValue = value;
                break;

            default:
                element.placeholder = value;
                break;
        }

        onUpdateElement(element, elementIndex);
    };

    return (
        <>
            <div className='list-input'>
                <input
                    className='report-create-item__input'
                    value={element.placeholder}
                    onChange={handleInputValueChange}
                    placeholder={element.name}
                />
                <div className='list-input__field'>
                    <input
                        className='report-create-item__input report-create-item__input_underline'
                        value={element.maxValue}
                        placeholder='Введите максимальное значние'
                        onChange={handleInputValueChange}
                        name='maxValue'
                        type='number'
                    />
                </div>
            </div>
            <input
                className='report-create-item__input report-create-item__input_underline report-create-item__input_counter'
                value={element.values.length}
                onChange={handleInputValueChange}
                type='number'
                name='cols'
            />
        </>
    );
};

export default PercentInput;
