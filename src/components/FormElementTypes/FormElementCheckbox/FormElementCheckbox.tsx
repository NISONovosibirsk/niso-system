import { IFormElementCheckbox } from '../interfaces';
import './FormElementCheckbox.scss';

const FormElementCheckbox = ({
    isChecked,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementCheckbox) => {

    return (
        <label className='form-element-checkbox'>
            <input
                className='form-element-checkbox__input'
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
                disabled={isDisabled}
                required={isRequired}
            />
            <div className='form-element-checkbox__custom-checkbox'></div>
        </label>
    );
};

export default FormElementCheckbox;
