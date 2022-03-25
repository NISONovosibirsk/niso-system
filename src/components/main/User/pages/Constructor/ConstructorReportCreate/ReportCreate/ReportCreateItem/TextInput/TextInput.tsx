const TextInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = e => {
        const { value } = e.target;

        element.value = value;

        onUpdateElement(element, elementIndex);
    };

    return (
        <input
            className='report-create-item__input report-create-item__input_underline'
            value={element.value}
            onChange={handleChange}
            placeholder={element.placeholder}
        />
    );
};

export default TextInput;
