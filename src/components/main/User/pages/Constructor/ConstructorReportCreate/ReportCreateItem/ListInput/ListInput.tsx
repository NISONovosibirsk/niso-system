import { TrashIcon } from '../../../../../../../../assets';
import { Button } from '../../../../../../../support';
import './ListInput.scss';

const ListInput = ({ element, onChangeItemValue, index }) => {
    const handleInputValueChange = e => {
        const { value } = e.target;

        element.value = value;

        onChangeItemValue(element, index);
    };

    const handleRowValueChange = (e, optionIndex) => {
        const { value } = e.target;

        element.options[optionIndex] = value;

        onChangeItemValue(element, index);
    };

    const handleAddRow = e => {
        e.preventDefault();

        element.options = [...element.options, ''];

        onChangeItemValue(element, index);
    };

    const handleDeleteRow = optionIndex => {
        element.options.splice(optionIndex, 1);

        onChangeItemValue(element, index);
    };

    return (
        <div className='list-input'>
            <input
                className='report-create-item__input'
                value={element.value}
                onChange={handleInputValueChange}
                placeholder={element.placeholder}
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
