import { ICheckbox } from '../../interfaces';
import './Checkbox.scss';

const Checkbox = ({
    isChecked,
    isDisabled,
    isRequired,
    onChange,
}: ICheckbox) => {
    return (
        <label className='checkbox'>
            <input
                className='checkbox__input'
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
