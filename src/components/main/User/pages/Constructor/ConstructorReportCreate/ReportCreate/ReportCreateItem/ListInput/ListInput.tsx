import { TrashIcon } from '../../../../../../../../../assets';
import { Button } from '../../../../../../../../support';
import './ListInput.scss';

const ListInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleInputValueChange = e => {
        const { value } = e.target;

        element.placeholder = value;

        onUpdateElement(element, elementIndex);
    };

    const handleRowValueChange = (e, optionIndex) => {
        const { value } = e.target;

        element.options = [...element.options];
        element.options[optionIndex] = value;

        onUpdateElement(element, elementIndex);
    };

    const handleAddRow = e => {
        e.preventDefault();

        element.options = [...element.options, ''];

        onUpdateElement(element, elementIndex);
    };

    const handleDeleteRow = optionIndex => {
        element.options.splice(optionIndex, 1);

        onUpdateElement(element, elementIndex);
    };

    return (
        <div className='list-input'>
            <input
                className='report-create-item__input'
                value={element.placeholder}
                onChange={handleInputValueChange}
                placeholder={element.name}
            />
            <ul className='list-input__list'>
                {element.options.map((option, optionIndex) => (
                    <li className='list-input__item' key={optionIndex}>
                        <input
                            className='report-create-item__input report-create-item__input_underline'
                            value={option}
                            placeholder={optionIndex + 1 + ' вариант'}
                            onChange={e => handleRowValueChange(e, optionIndex)}
                        />
                        {optionIndex > 0 ? (
                            <TrashIcon
                                className='list-input__trash'
                                onClick={() => handleDeleteRow(optionIndex)}
                            />
                        ) : null}
                    </li>
                ))}
                <li className='list-input__item'>
                    <Button
                        title='добавить вариант'
                        type='light-grey'
                        height='32px'
                        margin='0 0 0 16px'
                        onClick={handleAddRow}
                    />
                </li>
            </ul>
        </div>
    );
};

export default ListInput;
