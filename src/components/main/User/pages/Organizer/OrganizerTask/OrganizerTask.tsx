import { Draggable } from 'react-beautiful-dnd';
import './OrganizerTask.scss';

const OrganizerTask = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <li
                    className={`organizer-task ${
                        snapshot.isDragging && 'organizer-task_dragging'
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.content}
                </li>
            )}
        </Draggable>
    );
};

export default OrganizerTask;
