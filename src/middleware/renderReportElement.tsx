import {
    ReportCheckbox,
    ReportImage,
    ReportInput,
    ReportRadio,
    ReportText,
    ReportTextList,
} from '../components/support/reportElements';

const renderReportElement = (element, onUpdateElement, elementIndex) => {
    switch (element.type) {
        case 'text':
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
            return <ReportText element={element} key={elementIndex} />;
        case 'image':
            return <ReportImage element={element} key={elementIndex} />;
        case 'textList':
            return <ReportTextList element={element} key={elementIndex} />;
        case 'checkbox':
            return (
                <ReportCheckbox
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                    key={elementIndex}
                />
            );
        case 'radio':
            return (
                <ReportRadio
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                    key={elementIndex}
                />
            );
        default:
            return (
                <ReportInput
                    element={element}
                    onUpdateElement={onUpdateElement}
                    elementIndex={elementIndex}
                    key={elementIndex}
                />
            );
    }
};

export default renderReportElement;
