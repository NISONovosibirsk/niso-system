import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import './CalculateInput.scss';

const CalculateInput = ({ element, onUpdateElement, elementIndex }) => {
    const signs = ['(', ')', '*', '/', '+', '-'];
    const [caseClass, setCaseClass] = useState('');
    const { elements } = useTypeSelector(state => state.userConstructor.create);

    const handleDragStart = () => {
        setCaseClass('calculate-input__case_valid');
    };

    const handleDragEnd = ({ destination, source }) => {
        const newValues = [...element.values];

        if (!destination) {
            newValues.splice(source.index, 1);
            const newElement = { ...element, values: newValues };

            onUpdateElement(newElement, elementIndex);
            setCaseClass('');
        }

        if (source.droppableId === destination.droppableId) {
            newValues.splice(
                destination.index,
                0,
                ...newValues.splice(source.index, 1)
            );
            const newElement = { ...element, values: newValues };

            onUpdateElement(newElement, elementIndex);
            setCaseClass('');
        }
    };

    const handleDragUpdate = ({ destination }) => {
        if (!destination) {
            setCaseClass('calculate-input__case_invalid');
        } else {
            setCaseClass('calculate-input__case_valid');
        }
    };

    const handleAddSign = sign => {
        const newValues = [...element.values, sign];
        const newElement = { ...element, values: newValues };

        onUpdateElement(newElement, elementIndex);
    };

    return (
        <DragDropContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragUpdate={handleDragUpdate}
        >
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
                    {elements
                        .filter(element => element.type === 'number')
                        .map((numberInput, numberInputIndex) =>
                            numberInput.values.map((value, valueIndex) => (
                                <p
                                    className='calculate-input__sign calculate-input__sign_nodrop'
                                    key={
                                        numberInputIndex +
                                        1 +
                                        '-' +
                                        (valueIndex + 1)
                                    }
                                    onClick={() =>
                                        handleAddSign(
                                            numberInputIndex +
                                                1 +
                                                '-' +
                                                (valueIndex + 1)
                                        )
                                    }
                                >
                                    {numberInputIndex +
                                        1 +
                                        '-' +
                                        (valueIndex + 1)}
                                </p>
                            ))
                        )}
                </div>

                <Droppable droppableId='addedSigns' direction='horizontal'>
                    {provided => (
                        <div
                            className={`calculate-input__case ${caseClass}`}
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
