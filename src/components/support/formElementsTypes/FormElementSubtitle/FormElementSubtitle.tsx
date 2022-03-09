import TextareaAutosize from 'react-textarea-autosize';
import { IFormElementSubtitle } from '../interfaces';
import './FormElementSubtitle.scss';

const FormElementSubtitle = ({
    value,
    isDisabled,
    onChange,
    isFinalForm,
}: IFormElementSubtitle) => {
    return isFinalForm ? (
        <p className='form-element-subtitle form-element-subtitle__title'>
            {value}
        </p>
    ) : (
        <TextareaAutosize
            className='form-element-subtitle form-element-subtitle__input'
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            minRows={2}
            placeholder={'Описание формы'}
        />
    );
};

export default FormElementSubtitle;
