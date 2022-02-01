import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { lableChange, valueChange } from '../../store/actions/dragAndDrop';
import { useTypeSelector } from '../../hooks/useTypeSelector';

// FormElement props types
interface IFormElement {
    item: any;
    id: number;
    index: number;
}

const NewFormElement = ({ item, id, index }: IFormElement) => {
    const { constructor } = useTypeSelector(state => state.form);

    const dispatch = useDispatch();

    // change title of element
    const handleTitleChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].title = e.target.value;
        dispatch(lableChange(newState));
    };

    // change value of element
    const handleValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].value = e.target.value;
        dispatch(valueChange(newState));
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className='form-element'>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={e => handleTitleChange(e)}
                        ></input>
                        <input
                            className='form-element__input'
                            type={item.type}
                            value={item.value}
                            onChange={e => handleValueChange(e)}
                        ></input>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default NewFormElement;
