import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateElements } from '../../../../../../../store/actions/userConstrucorActions';
import ReportCreateItem from '../ReportCreateItem/ReportCreateItem';
import './ReportCreateList.scss';

const ReportCreateList = ({ elements }) => {
    const dispatch = useDispatch();

    const handleDragEnd = result => {
        const { destination, source } = result;

        if (!destination) {
            const newElements = [...elements];
            newElements.splice(source.index, 1);

            dispatch(updateElements(newElements));
        }

        if (source.droppableId === destination.droppableId) {
            const newElements = [...elements];
            newElements.splice(
                destination.index,
                0,
                ...newElements.splice(source.index, 1)
            );

            dispatch(updateElements(newElements));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={'reportCreateList'}>
                {provided => (
                    <ul
                        className='report-create-list'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {elements.map((element, index) => (
                            <ReportCreateItem
                                element={element}
                                index={index}
                                key={index}
                            />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default ReportCreateList;
