import {
    CheckboxInput,
    ImageInput,
    ListInput,
    RadioInput,
    TextList,
} from '../components/main/User/pages/Constructor/ConstructorReportCreate/ReportCreate/ReportCreateItem';

const renderReportElementInput = (
    element,
    onChange,
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
                <input
                    className='report-create-item__input report-create-item__input_underline'
                    value={element.value}
                    onChange={onChange}
                    placeholder={element.placeholder}
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
        default:
            return (
                <input
                    className='report-create-item__input'
                    value={element.value}
                    onChange={onChange}
                    placeholder={element.placeholder}
                />
            );
    }
};

export default renderReportElementInput;
