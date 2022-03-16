import { Draggable } from 'react-beautiful-dnd';
import './ReportCreateItem.scss';

const ReportCreateItem = ({ element, index }) => {
    const renderElement = () => {
        switch (element.type) {
            case 'text':
                return 'текст';
            case 'h1':
                return 'заголовок 1 уровня';
            case 'image':
                return 'картинка';
            case 'textList':
                return 'список';

            default:
                return element.placeholder;
        }
    };

    return (
        <Draggable
            draggableId={index.toString()}
            index={index}
            style={{
                filter: 'drop-shadow(-8px 8px 8px rgba(42, 83, 145, 0.15))',
            }}
        >
            {(provided, snapshot) => (
                <li
                    className={`report-create-item ${
                        snapshot.isDragging ? 'report-create-item_dragging' : ''
                    }`}
                    id={index.toString()}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {renderElement()}
                </li>
            )}
        </Draggable>
    );
};

export default ReportCreateItem;
