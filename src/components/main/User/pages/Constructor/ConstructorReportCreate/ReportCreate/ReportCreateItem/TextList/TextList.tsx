import { TrashIcon } from '../../../../../../../../../assets';
import { Button } from '../../../../../../../../support';
import './TextList.scss';

const TextList = ({ element, onUpdateElement, elementIndex }) => {
    const handleRowValueChange = (e, valueIndex) => {
        const { value } = e.target;

        element.values[valueIndex] = value;

        onUpdateElement(element, elementIndex);
    };

    const handleAddRow = e => {
        e.preventDefault();

        element.values = [...element.values, ''];

        onUpdateElement(element, elementIndex);
    };

    const handleDeleteRow = valueIndex => {
        element.values.splice(valueIndex, 1);

        onUpdateElement(element, elementIndex);
    };

    return (
        <ul className='text-list'>
            {element.values.map((value, valueIndex) => (
                <li className='text-list__item' key={valueIndex}>
                    <input
                        className='report-create-item__input report-create-item__input_underline'
                        value={value}
                        placeholder={valueIndex + 1 + ' пункт'}
                        onChange={e => handleRowValueChange(e, valueIndex)}
                    />
                    {valueIndex > 1 ? (
                        <TrashIcon
                            className='text-list__trash'
                            onClick={() => handleDeleteRow(valueIndex)}
                        />
                    ) : null}
                </li>
            ))}
            <li className='text-list__item'>
                <Button
                    title='добавить пункт'
                    type='light-grey'
                    height='32px'
                    margin='0 0 0 8px'
                    onClick={handleAddRow}
                />
            </li>
        </ul>
    );
};

export default TextList;
