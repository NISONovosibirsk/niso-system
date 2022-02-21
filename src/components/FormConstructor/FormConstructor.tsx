import { CustomForm, FormElements, SearchForm } from '..';
import './FormConstructor.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateAddedElements } from '../../store/actions/constructorActions';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const FormConstructor = () => {
    const { addedElements, initialElements } = useTypeSelector(
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
        if (source.droppableId === 'formElements') {
            const newState = [...addedElements];
            const card = { ...initialElements[source.index] };
            card.isDisabled = !card.isDisabled;
            card.id = Date.now();
            newState.splice(destination.index, 0, card);

            dispatch(updateAddedElements(newState));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className='form-constructor'>
                <FormElements />
                <CustomForm />
                <SearchForm />
            </section>
        </DragDropContext>
    );
};

export default FormConstructor;
