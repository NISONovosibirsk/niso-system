import { ICheckbox } from '../../../interfaces';
import './Checkbox.scss';

const Checkbox = ({
    id,
    isChecked,
    isDisabled,
    isRequired,
    onChange,
}: ICheckbox) => {
    return (
        <label className='checkbox'>
            <input
                className='checkbox__input'
                id={id}
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
            <div className='checkbox__custom-checkbox'></div>
        </label>
    );
};

export default Checkbox;
