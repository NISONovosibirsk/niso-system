const DefaultInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = e => {
        const { value } = e.target;

        element.placeholder = value;

        onUpdateElement(element, elementIndex);
    };
    return (
        <input
            className='report-create-item__input'
            value={element.placeholder}
            onChange={handleChange}
            placeholder={element.name}
        />
    );
};

export default DefaultInput;
