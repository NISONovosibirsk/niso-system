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
    return formElements.map(element => {
        switch (element.type) {
            case 'header':
                return (
                    <FormElementHeader
                        key={element.id}
                        value={element.placeholder}
                        onChange={() => {}}
                        isDisabled={element.isDisabled}
                        isFinalForm={true}
                    />
                );
            case 'title':
                return (
                    <FormElementTitle
                        key={element.id}
                        value={element.placeholder}
                        onChange={() => {}}
                        isDisabled={element.isDisabled}
                        isFinalForm={true}
                    />
                );
            case 'subtitle':
                return (
                    <FormElementSubtitle
                        key={element.id}
                        value={element.placeholder}
                        onChange={() => {}}
                        isFinalForm={true}
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
                            value={''}
                            onChange={() => {}}
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
                            value={element.value}
                            defaultValue={element.placeholder}
                            onValueChange={() => {}}
                            isFinalForm={true}
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
                            onChange={() => {}}
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
                            value={''}
                            onChange={() => {}}
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
                            value={''}
                            onChange={() => {}}
                            isRequired={element.isRequired}
                        />
                    </label>
                );
        }
    });
};
