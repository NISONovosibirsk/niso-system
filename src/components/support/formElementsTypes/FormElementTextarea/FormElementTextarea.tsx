import './FormElementTextarea.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { IFormElementTextarea } from '../interfaces';

const FormElementTextarea = ({
    id,
    value,
    placeholder,
    isDisabled,
    isRequired,
    onChange,
}: IFormElementTextarea) => {
    return (
        <TextareaAutosize
            className='form-element-textarea'
            id={id}
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
