import {
    CheckboxInput,
    DefaultInput,
    ImageInput,
    ListInput,
    PercentInput,
    RadioInput,
    TextInput,
    TextList,
} from '../components/main/User/pages/Constructor/ConstructorReportCreate/ReportCreate/ReportCreateItem';

const renderReportCreateElementInput = (
    element,
    onUpdateElement,
    elementIndex
) => {
    switch (element.type) {
        case 'text':
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
            return (
                <TextInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'image':
            return (
                <ImageInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'textList':
            return (
                <TextList
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'checkbox':
            return (
                <CheckboxInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'radio':
            return (
                <RadioInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'list':
            return (
                <ListInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        case 'percent':
            return (
                <PercentInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
        default:
            return (
                <DefaultInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                />
            );
    }
};

export default renderReportCreateElementInput;
