import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './CalculateInput.scss';

const CalculateInput = ({ element, onUpdateElement, elementIndex }) => {
    const signs = ['(', ')', '*', '/', '+', '-'];

    const handleDragEnd = ({ destination, source }) => {
        const newValues = [...element.values];

        if (!destination) {
            newValues.splice(source.index, 1);
            const newElement = { ...element, values: newValues };

            onUpdateElement(newElement, elementIndex);
        }

        if (source.droppableId === destination.droppableId) {
            newValues.splice(
                destination.index,
                0,
                ...newValues.splice(source.index, 1)
            );
            const newElement = { ...element, values: newValues };

            onUpdateElement(newElement, elementIndex);
        }
    };

    const handleAddSign = sign => {
        const newValues = [...element.values, sign];
        const newElement = { ...element, values: newValues };

        onUpdateElement(newElement, elementIndex);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className='calculate-input'>
                <div className='calculate-input__signs'>
                    {signs.map((sign, signIndex) => (
                        <p
                            className='calculate-input__sign calculate-input__sign_nodrop'
                            key={signIndex}
                            onClick={() => handleAddSign(sign)}
                        >
                            {sign}
                        </p>
                    ))}
                </div>

                <Droppable droppableId='addedSigns' direction='horizontal'>
                    {provided => (
                        <div
                            className='calculate-input__case'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {element.values.map((value, valueIndex) => (
                                <Draggable
                                    draggableId={'sign' + valueIndex}
                                    index={valueIndex}
                                    key={valueIndex}
                                >
                                    {provided => (
                                        <p
                                            className='calculate-input__sign'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {value}
                                        </p>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <p className='calculate-input__text'></p>
            </div>
        </DragDropContext>
    );
};

export default CalculateInput;
