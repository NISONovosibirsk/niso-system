import './FormElements.scss';
import { FormElement } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import OldFormElement from '../FormElement/OldFormElement'

const FormElements = () => {
    const { elements } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

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
                            <OldFormElement
                                id={item.id}
                                title={item.title}
                                type={item.type}
                                isDisabled={item.isDisabled}
                                onChange={() => {}}
                                key={item.id}
                                item={item}
                                index={index}
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
