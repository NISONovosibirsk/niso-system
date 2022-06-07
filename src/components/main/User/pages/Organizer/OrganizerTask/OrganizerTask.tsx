import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateTasks } from '../../../../../../store/actions/userOrganizerActions';
import './OrganizerTask.scss';

const OrganizerTask = ({ columnId, task, index, onDeleteTask }) => {
    const { tasks } = useTypeSelector(state => state.userOrganizer);
    const dispatch = useDispatch();

    const handleBlur = e => {
        const { value } = e.target;

        if (value.trim()) {
            const newTask = { ...task, content: value.trim() };
            dispatch(updateTasks({ ...tasks, [newTask.id]: newTask }));
        } else {
            onDeleteTask(columnId, index, task.id);
        }
    };

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
                    {task.content ? (
                        <p className='organizer-task__title'>{task.content}</p>
                    ) : (
                        <ReactTextareaAutosize
                            className='organizer-task__textarea'
                            onBlur={handleBlur}
                            autoFocus
                        />
                    )}
                </li>
            )}
        </Draggable>
    );
};

export default OrganizerTask;
