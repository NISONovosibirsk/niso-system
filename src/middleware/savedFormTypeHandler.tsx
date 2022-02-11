import {
    FormElementCheckbox,
    FormElementHeader,
    FormElementInput,
    FormElementRange,
    FormElementSubtitle,
    FormElementTel,
    FormElementTextarea,
    FormElementTitle,
} from '../components';

export const savedFormTypeHandler = ({
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
                <label key={element.id} className='saved-form__label'>
                    {element.label}
                    {element.isRequired && (
                        <p className='saved-form__sign-required'>*</p>
                    )}
                    <FormElementTel
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </label>
            );
        case 'range':
            return (
                <label key={element.id} className='saved-form__label'>
                    {element.label}
                    {element.isRequired && (
                        <p className='saved-form__sign-required'>*</p>
                    )}
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
                <label key={element.id} className='saved-form__label'>
                    {element.label}
                    {element.isRequired && (
                        <p className='saved-form__sign-required'>*</p>
                    )}
                    <FormElementCheckbox
                        isChecked={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </label>
            );
        case 'textArea':
            return (
                <label key={element.id} className='saved-form__label'>
                    {element.label}
                    {element.isRequired && (
                        <p className='saved-form__sign-required'>*</p>
                    )}
                    <FormElementTextarea
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </label>
            );
        default:
            return (
                <label key={element.id} className='saved-form__label'>
                    {element.label}
                    {element.isRequired && (
                        <p className='saved-form__sign-required'>*</p>
                    )}
                    <FormElementInput
                        type={element.type}
                        placeholder={element.placeholder}
                        value={element.value}
                        onChange={onValueChange}
                        isRequired={element.isRequired}
                    />
                </label>
            );
    }
};
