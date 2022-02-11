import './FormElementTextarea.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { IFormElementTextarea } from '../interfaces';

const FormElementTextarea = ({
    value,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementTextarea) => {
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
