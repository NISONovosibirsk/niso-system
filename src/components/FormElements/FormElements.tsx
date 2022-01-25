import { FormElement } from '..';
import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';

//import action to take element
import { dragElement } from '../../store/actions/dragAndDrop';
import { useDispatch } from 'react-redux';

const FormElements = () => {
    const { elements } = useTypeSelector(state => state.dragAndDrop);
    const dispatch = useDispatch();

    //dispatching draggin' item to redux
    const dragStartHandler = (item: any) => {
        dispatch(dragElement(item));
    };

    return (
        <div className='form-elements'>
            <h2 className='form-elements__title'>Элементы конструктора</h2>
            <div className='form-elements__field'>
                {elements.map((item: any) => (
                    <FormElement
                        id={item.id}
                        title={item.title}
                        type={item.type}
                        isDisabled={item.isDisabled}
                        onChange={() => {}}
                        key={item.id}
                        item={item}
                        dragNdrop={dragStartHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormElements;
