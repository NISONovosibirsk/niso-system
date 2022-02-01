import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Droppable } from 'react-beautiful-dnd';
import { FormElement } from '..';

const FormElements = () => {
    const { elements } = useTypeSelector(state => state.form);

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
                        {elements.map((item: any, index: number) => (
                            <FormElement
                                item={item}
                                id={item.id}
                                index={index}
                                key={index}
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
