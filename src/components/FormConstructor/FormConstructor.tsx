import { CustomForm, FormElements } from '..';
import './FormConstructor.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { sortElements } from '../../store/actions/dragAndDrop';
import { useDispatch } from 'react-redux';

const FormConstructor = () => {

    const dispatch = useDispatch();

    const handleDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        dispatch(
            sortElements(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId
            )
        );
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
