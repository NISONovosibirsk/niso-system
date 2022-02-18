import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Droppable } from 'react-beautiful-dnd';
import { FormElement } from '..';

const FormElements = () => {
    const { initialElements } = useTypeSelector(state => state.formConstructor);

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
                        {initialElements.map((initialElement, index) => (
                            <FormElement
                                element={initialElement}
                                id={initialElement.id}
                                index={index}
                                key={initialElement.id}
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
