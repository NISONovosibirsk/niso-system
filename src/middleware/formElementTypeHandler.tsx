import {
    FormElementCheckbox,
    FormElementHeader,
    FormElementInput,
    FormElementList,
    FormElementRange,
    FormElementSubtitle,
    FormElementTel,
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
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'title':
            return (
                <FormElementTitle
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'subtitle':
            return (
                <FormElementSubtitle
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'tel':
            return (
                <FormElementTel
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
        case 'range':
            return (
                <FormElementRange
                    valueMaximum={element.max}
                    valueMinimum={element.min}
                    valueStep={element.step}
                    value={element.placeholder}
                    onValueChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        case 'checkbox':
            return (
                <FormElementCheckbox
                    defaultChecked={element.placeholder}
                    isChecked={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
        case 'textArea':
            return (
                <FormElementTextarea
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
        case 'list':
            return (
                <FormElementList
                    id={element.id}
                    value={element.placeholder}
                    datalist={element.datalist}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                    isFinalForm={isFinalForm}
                />
            );
        default:
            return (
                <FormElementInput
                    type={element.type}
                    value={element.placeholder}
                    onChange={onValueChange}
                    isDisabled={element.isDisabled}
                />
            );
    }
};

export default formElementTypeHandler;
