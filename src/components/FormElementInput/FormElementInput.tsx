import './FormElementInput.scss';

const FormElementInput = ({
    value,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: {
    value: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    onChange: any;
}) => {
    return (
        <input
            className='form-element-input'
            value={value}
            placeholder={placeholder || ''}
            onChange={onChange}
            disabled={isDisabled}
            required={isRequired}
        />
    );
};

export default FormElementInput;
