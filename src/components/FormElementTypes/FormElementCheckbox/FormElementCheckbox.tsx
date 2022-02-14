import { IFormElementCheckbox } from '../interfaces';
import './FormElementCheckbox.scss';

const FormElementCheckbox = ({
    defaultChecked,
    isChecked,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementCheckbox) => {
    const currentChecked = isChecked ? isChecked : defaultChecked;

    return (
        <label className='form-element-checkbox'>
            <input
                className='form-element-checkbox__input'
                type='checkbox'
                checked={currentChecked}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
            <div className='form-element-checkbox__custom-checkbox'></div>
        </label>
    );
};

export default FormElementCheckbox;
