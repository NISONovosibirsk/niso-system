import './FormElementTextarea.scss';
import TextareaAutosize from 'react-textarea-autosize';

const FormElementTextarea = ({
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
        <TextareaAutosize
            className='form-element-textarea'
            value={value}
            placeholder={placeholder || ''}
            onChange={onChange}
            disabled={isDisabled}
            required={isRequired}
            minRows={5}
        />
    );
};

export default FormElementTextarea;
