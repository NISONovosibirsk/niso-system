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

export const savedFormTypeHandler = formElements => {
    return formElements.map((item, index) => {
        switch (item.type) {
            case 'header':
                return (
                    <FormElementHeader
                        key={index}
                        value={item.placeholder}
                        onChange={() => {}}
                        isDisabled={item.isDisabled}
                        isFinalForm={true}
                    />
                );
            case 'title':
                return (
                    <FormElementTitle
                        key={index}
                        value={item.placeholder}
                        onChange={() => {}}
                        isDisabled={item.isDisabled}
                        isFinalForm={true}
                    />
                );
            case 'subtitle':
                return (
                    <FormElementSubtitle
                        key={index}
                        value={item.placeholder}
                        onChange={() => {}}
                        isFinalForm={true}
                    />
                );
            case 'tel':
                return (
                    <label key={index} className='saved-form__label'>
                        {item.label}
                        {item.isRequired && (
                            <p className='saved-form__sign-required'>*</p>
                        )}
                        <FormElementTel
                            placeholder={item.placeholder}
                            value={''}
                            onChange={() => {}}
                            isRequired={item.isRequired}
                        />
                    </label>
                );
            case 'range':
                return (
                    <label key={index} className='saved-form__label'>
                        {item.label}
                        {item.isRequired && (
                            <p className='saved-form__sign-required'>*</p>
                        )}
                        <FormElementRange
                            valueMaximum={item.max}
                            valueMinimum={item.min}
                            value={item.value}
                            defaultValue={item.placeholder}
                            onValueChange={() => {}}
                            isFinalForm={true}
                        />
                    </label>
                );
            case 'checkbox':
                return (
                    <label key={index} className='saved-form__label'>
                        {item.label}
                        {item.isRequired && (
                            <p className='saved-form__sign-required'>*</p>
                        )}
                        <FormElementCheckbox
                            isChecked={item.value}
                            onChange={() => {}}
                            isRequired={item.isRequired}
                        />
                    </label>
                );
            case 'textArea':
                return (
                    <label key={index} className='saved-form__label'>
                        {item.label}
                        {item.isRequired && (
                            <p className='saved-form__sign-required'>*</p>
                        )}
                        <FormElementTextarea
                            placeholder={item.placeholder}
                            value={''}
                            onChange={() => {}}
                            isRequired={item.isRequired}
                        />
                    </label>
                );
            default:
                return (
                    <label key={index} className='saved-form__label'>
                        {item.label}
                        {item.isRequired && (
                            <p className='saved-form__sign-required'>*</p>
                        )}
                        <FormElementInput
                            type={item.type}
                            placeholder={item.placeholder}
                            value={''}
                            onChange={() => {}}
                            isRequired={item.isRequired}
                        />
                    </label>
                );
        }
    });
};
