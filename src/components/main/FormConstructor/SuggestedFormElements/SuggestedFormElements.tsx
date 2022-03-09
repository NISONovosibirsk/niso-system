import './SuggestedFormElements.scss';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { Droppable } from 'react-beautiful-dnd';
import { ConstructorFormElement } from '..';

const SuggestedFormElements = () => {
    const { suggestedElements } = useTypeSelector(
        state => state.formConstructor
    );

    return (
        <Droppable droppableId={'suggestedFormElements'} isDropDisabled={true}>
            {provided => (
                <div className='suggested-form-elements'>
                    <h2 className='suggested-form-elements__title'>
                        Элементы конструктора
                    </h2>
                    <div
                        className='suggested-form-elements__field'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {suggestedElements.map((initialElement, index) => (
                            <ConstructorFormElement
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

export default SuggestedFormElements;
