import './FormElementTitle.scss';

const FormElementTitle = ({
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
        <h2 className='form-element-title form-element-title_title'>{value}</h2>
    ) : (
        <input
            className='form-element-title form-element-title_input'
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            placeholder={'Название формы'}
            required={true}
        />
    );
};

export default FormElementTitle;
