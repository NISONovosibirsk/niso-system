import './TextInput.scss';

const TextInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleTextChange = (e, valueIndex) => {
        const { value } = e.target;

        element.values = [...element.values];

        element.values[valueIndex] = value;

        element.value = value;

        onUpdateElement(element, elementIndex);
    };

    const handleTitleChange = e => {
        const { value } = e.target;

        element.value = value;

        onUpdateElement(element, elementIndex);
    };

    const handleCounterChange = e => {
        const { value } = e.target;

        element.values = [...element.values];

        if (element.values.length < value) {
            element.values.push('');
        } else if (element.values.length > 1) {
            element.values.splice(element.values.length - 1, 1);
        }

        onUpdateElement(element, elementIndex);
    };

    return (
        <>
            {element.type === 'text' ? (
                <>
                    <div className='text-input__inputs-field'>
                        {element.values.map((value, valueIndex) => (
                            <input
                                className='report-create-item__input report-create-item__input_underline'
                                value={value}
                                onChange={e => handleTextChange(e, valueIndex)}
                                placeholder={valueIndex + 1 + ' столбец'}
                            />
                        ))}
                    </div>
                    <input
                        className='report-create-item__input report-create-item__input_counter'
                        value={element.values.length}
                        onChange={handleCounterChange}
                        type='number'
                    />
                </>
            ) : (
                <input
                    className='report-create-item__input report-create-item__input_underline'
                    value={element.value}
                    onChange={handleTitleChange}
                    placeholder={element.placeholder}
                />
            )}
        </>
    );
};

export default TextInput;
