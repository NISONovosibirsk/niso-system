import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Droppable } from 'react-beautiful-dnd';
import { FormElement } from '..';

const FormElements = () => {
    const { addedElements } = useTypeSelector(state => state.constructor);

    return (
        <Droppable droppableId={'formElements'} isDropDisabled={true}>
            {provided => (
                <div className='form-elements'>
                    <h2 className='form-elements__title'>
                        Элементы конструктора
                    </h2>
                    <div
                        className='form-elements__field'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {addedElements.map((addedElement, index) => (
                            <FormElement
                                element={addedElement}
                                id={addedElement.id}
                                index={index}
                                key={addedElement.id}
                            />
                        ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default FormElements;
