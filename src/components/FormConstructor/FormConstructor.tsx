import { CustomForm, FormElements } from '..';
import './FormConstructor.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { addElement, sortElements } from '../../store/actions/formActions';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const FormConstructor = () => {
    const { constructor, elements } = useTypeSelector(state => state.form);

    const dispatch = useDispatch();

    const handleDragEnd = result => {
        const { destination, source, draggableId } = result;

        // return null if target out of droppable
        if (!destination) {
            return;
        }

        // moving elements in constructor
        if (source.droppableId === destination.droppableId) {
            const newState = Array.from(constructor);
            const spliced = newState.splice(source.index, 1);
            newState.splice(destination.index, 0, ...spliced);

            dispatch(sortElements(newState));
        }

        // drag element to constructor
        if (source.droppableId === 'formElements') {
            const newState: Array<any> = Array.from(constructor);
            const card = { ...elements[source.index] };
            card.id = Date.now();
            newState.splice(destination.index, 0, card);

            dispatch(addElement(newState));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className='form-constructor'>
                <FormElements />
                <CustomForm />
            </section>
        </DragDropContext>
    );
};

export default FormConstructor;
