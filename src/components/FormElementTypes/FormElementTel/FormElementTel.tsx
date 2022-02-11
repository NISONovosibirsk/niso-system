import { IFormElementTel } from '../interfaces';
import './FormElementTel.scss';

const FormElementTel = ({
    value,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementTel) => {
    return (
        <input
            className='form-element-tel'
            pattern='^((\+7|7|8)+([0-9]){10})$'
            value={value}
            placeholder={placeholder || ''}
            onChange={onChange}
            disabled={isDisabled}
            required={isRequired}
        />
    );
};

export default FormElementTel;
