import { TrashIcon } from '../../../../../../../../../assets';
import { Button } from '../../../../../../../../support';
import './RadioInput.scss';

const RadioInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleChange = (e, radioIndex) => {
        const { value, type } = e.target;

        switch (type) {
            case 'radio':
                element.radios.forEach(radio => (radio.isChecked = false));
                element.radios[radioIndex].isChecked = true;
                break;

            default:
                element.radios[radioIndex].title = value;
                break;
        }

        onUpdateElement(element, elementIndex);
    };

    const handleAddRadio = e => {
        e.preventDefault();

        element.radios = [...element.radios, { title: '', isChecked: false }];

        onUpdateElement(element, elementIndex);
    };

    const handleDeleteRadio = radioIndex => {
        element.radios[radioIndex].isChecked === true &&
            (element.radios[0].isChecked = true);

        element.radios.splice(radioIndex, 1);

        onUpdateElement(element, elementIndex);
    };

    return (
        <ul className='radio-input'>
            {element.radios.map((radio, radioIndex) => (
                <li className='radio-input__item' key={radioIndex}>
                    <label className='radio-input__label'>
                        <input
                            className='radio-input__input'
                            type='radio'
                            checked={radio.isChecked}
                            onChange={e => handleChange(e, radioIndex)}
                        />
                        <div className='radio-input__custom-radio'></div>
                        <input
                            className='report-create-item__input report-create-item__input_underline'
                            value={radio.title}
                            placeholder={radioIndex + 1 + ' вариант'}
                            onChange={e => handleChange(e, radioIndex)}
                        />
                    </label>
                    {radioIndex > 0 ? (
                        <TrashIcon
                            className='radio-input__trash'
                            onClick={() => handleDeleteRadio(radioIndex)}
                        />
                    ) : null}
                </li>
            ))}
            <li className='radio-input__item'>
                <Button
                    title='добавить вариант'
                    type='light-grey'
                    height='32px'
                    onClick={handleAddRadio}
                />
            </li>
        </ul>
    );
};

export default RadioInput;
