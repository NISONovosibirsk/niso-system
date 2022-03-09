import {
    Checkbox,
    FormElementHeader,
    FormElementInput,
    FormElementList,
    FormElementRadio,
    FormElementRange,
    FormElementSubtitle,
    FormElementTel,
    FormElementTextarea,
    FormElementTitle,
} from '../components/support';

export const reportFormElementTypeHandler = ({
    onValueChange,
    element,
    isFinalForm,
}: {
    onValueChange: any;
    element: any;
    isFinalForm: boolean;
}) => {
    switch (element.type) {
        case 'header':
            return (
                <FormElementHeader
                    key={element.id}
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'title':
            return (
                <FormElementTitle
                    key={element.id}
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'subtitle':
            return (
                <FormElementSubtitle
                    key={element.id}
                    value={element.placeholder}
                    onChange={onValueChange}
                    isFinalForm={isFinalForm}
                />
            );
        case 'tel':
            return (
                <div className='report-form__field'>
                    <label
                        key={element.id}
                        className='report-form__label'
                        htmlFor={element.id}
                    >
                        {element.label}
                    </label>
                    {element.isRequired && (
                        <p className='report-form__sign-required'>*</p>
                    )}
                    <FormElementTel
                        id={element.id}
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </div>
            );
        case 'range':
            return (
                <label key={element.id} className='report-form__label'>
                    {element.label}
                    <FormElementRange
                        valueMaximum={element.max}
                        valueMinimum={element.min}
                        valueStep={element.step}
                        value={element.value}
                        defaultValue={element.placeholder}
                        onValueChange={onValueChange}
                        isFinalForm={isFinalForm}
                    />
                </label>
            );
        case 'checkbox':
            return (
                <div className='report-form__field report-form__field_checkbox'>
                    <Checkbox
                        id={element.id}
                        isChecked={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                    <label
                        key={element.id}
                        className='report-form__label report-form__label_checkbox'
                        htmlFor={element.id}
                    >
                        {element.label}
                    </label>
                </div>
            );
        case 'textArea':
            return (
                <div className='report-form__field'>
                    <label
                        key={element.id}
                        className='report-form__label'
                        htmlFor={element.id}
                    >
                        {element.label}
                    </label>
                    {element.isRequired && (
                        <p className='report-form__sign-required'>*</p>
                    )}
                    <FormElementTextarea
                        id={element.id}
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </div>
            );
        case 'list':
            return (
                <div className='report-form__field'>
                    <label
                        key={element.id}
                        className='report-form__label'
                        htmlFor={element.id}
                    >
                        {element.label}
                    </label>
                    {element.isRequired && (
                        <p className='report-form__sign-required'>*</p>
                    )}
                    <FormElementList
                        id={element.id}
                        value={element.value}
                        placeholder={element.placeholder}
                        datalist={element.datalist}
                        onChange={onValueChange}
                        isDisabled={element.isDisabled}
                        isRequired={element.isRequired}
                        isFinalForm={isFinalForm}
                    />
                </div>
            );
        case 'radio':
            return (
                <div className='report-form__field'>
                    <label key={element.id} className='report-form__label'>
                        {element.label}
                    </label>
                    <FormElementRadio
                        id={element.id}
                        radiolist={element.radiolist}
                        onChange={onValueChange}
                        isDisabled={element.isDisabled}
                        isFinalForm={isFinalForm}
                    />
                </div>
            );
        default:
            return (
                <div className='report-form__field'>
                    <label
                        key={element.id}
                        className='report-form__label'
                        htmlFor={element.id}
                    >
                        {element.label}
                    </label>
                    {element.isRequired && (
                        <p className='report-form__sign-required'>*</p>
                    )}
                    <FormElementInput
                        id={element.id}
                        type={element.type}
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </div>
            );
    }
};
