import { IFormElementHeader } from '../interfaces';
import './FormElementHeader.scss';

const FormElementHeader = ({
    value,
    isDisabled,
    onChange,
    isFinalForm,
}: IFormElementHeader) => {
    return isFinalForm ? (
        <h3 className='form-element-header form-element-header_title'>
            {value}
        </h3>
    ) : (
        <input
            className='form-element-header form-element-header_input'
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            placeholder={'Заголовок формы'}
            required={true}
        />
    );
};

export default FormElementHeader;
