import './FormElementHeader.scss';

const FormElementHeader = ({
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
        <h3 className='form-element-header form-element-header_title'>
            {value}
        </h3>
    ) : (
        <input
            className='form-element-header form-element-header_input'
            onChange={onChange}
            disabled={isDisabled}
            placeholder={'Название формы'}
        />
    );
};

export default FormElementHeader;
