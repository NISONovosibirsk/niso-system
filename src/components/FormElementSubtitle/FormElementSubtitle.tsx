import TextareaAutosize from 'react-textarea-autosize';
import './FormElementSubtitle.scss';

const FormElementSubtitle = ({
    value,
    isDisabled,
    onChange,
    isFinalForm,
}: {
    value: string;
    isDisabled?: boolean;
    onChange: any;
    isFinalForm: boolean;
}) => {
    return isFinalForm ? (
        <p className='form-element-subtitle form-element-subtitle_title'>
            {value}
        </p>
    ) : (
        <TextareaAutosize
            className='form-element-subtitle form-element-subtitle_input'
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            minRows={2}
            placeholder={'Описание формы'}
        />
    );
};

export default FormElementSubtitle;
