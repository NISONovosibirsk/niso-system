import './FormElementInput.scss';

const FormElementInput = ({
    value,
    type,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: {
    value: string;
    type: string
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}) => {
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
