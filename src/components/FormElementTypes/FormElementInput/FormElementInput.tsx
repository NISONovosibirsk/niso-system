import { IFormElementInput } from '../interfaces';
import './FormElementInput.scss';

const FormElementInput = ({
    value,
    type,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementInput) => {
    return (
        <input
            className='form-element-input'
            type={type}
            value={value}
            placeholder={placeholder || ''}
            onChange={onChange}
            disabled={isDisabled}
            required={isRequired}
        />
    );
};

export default FormElementInput;
