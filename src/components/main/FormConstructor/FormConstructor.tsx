import './FormConstructor.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateAddedElements } from '../../../store/actions/formConstructorActions';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { CustomForm, SuggestedFormElements } from '.';

const FormConstructor = () => {
    const { addedElements, suggestedElements } = useTypeSelector(
        state => state.formConstructor
    );

    const dispatch = useDispatch();

    const handleDragEnd = result => {
        const { destination, source } = result;

        // return null if target out of droppable
        if (!destination) {
            return;
        }

        // moving elements in constructor
        if (source.droppableId === destination.droppableId) {
            const newState = [...addedElements];
            const spliced = newState.splice(source.index, 1);
            newState.splice(destination.index, 0, ...spliced);

            dispatch(updateAddedElements(newState));
        }

        // drag element to constructor
        if (source.droppableId === 'suggestedFormElements') {
            const newState = [...addedElements];
            const card = { ...suggestedElements[source.index] };
            card.isDisabled = !card.isDisabled;
            card.id = Date.now();
            newState.splice(destination.index, 0, card);

            dispatch(updateAddedElements(newState));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className='form-constructor'>
                <SuggestedFormElements />
                <CustomForm />
            </section>
        </DragDropContext>
    );
};

export default FormConstructor;
