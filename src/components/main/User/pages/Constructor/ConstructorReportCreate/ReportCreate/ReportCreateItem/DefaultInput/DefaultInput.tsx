const DefaultInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = e => {
        const { value, type } = e.target;

        switch (type) {
            case 'number':
                element.values = [...element.values];

                if (element.values.length < value) {
                    element.values.push('');
                } else if (element.values.length > 1) {
                    element.values.splice(element.values.length - 1, 1);
                }
                break;

            default:
                element.placeholder = value;
                break;
        }

        onUpdateElement(element, elementIndex);
    };

    return (
        <>
            <input
                className='report-create-item__input'
                value={element.placeholder}
                onChange={handleChange}
                placeholder={element.name}
            />
            <input
                className='report-create-item__input report-create-item__input_underline report-create-item__input_counter'
                value={element.values.length}
                onChange={handleChange}
                type='number'
            />
        </>
    );
};

export default DefaultInput;
