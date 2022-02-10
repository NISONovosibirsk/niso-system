import {
    FormElementCheckbox,
    FormElementHeader,
    FormElementInput,
    FormElementRange,
    FormElementSubtitle,
    FormElementTextarea,
    FormElementTitle,
} from '../components';

const formElementTypeHandler = ({
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
                    value={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'title':
            return (
                <FormElementTitle
                    value={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'subtitle':
            return (
                <FormElementSubtitle
                    value={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'range':
            return (
                <FormElementRange
                    valueMaximum={element.max}
                    valueMinimum={element.min}
                    value={element.value}
                    onValueChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'checkbox':
            return (
                <FormElementCheckbox
                    isChecked={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
        case 'textArea':
            return (
                <FormElementTextarea
                    value={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
        default:
            return (
                <FormElementInput
                    value={element.value}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
    }
};

export default formElementTypeHandler;
