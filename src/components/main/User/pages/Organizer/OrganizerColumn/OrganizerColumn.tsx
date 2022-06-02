import { Droppable } from 'react-beautiful-dnd';
import OrganizerTask from '../OrganizerTask/OrganizerTask';
import './OrganizerColumn.scss';

const OrganizerColumn = ({ column, tasks }) => {
    return (
        <li className='organizer-column'>
            <p className='organizer-column__title'>{column.title}</p>
            <Droppable droppableId={column.id}>
                {provided => (
                    <ul
                        className='organizer-column__tasks'
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <OrganizerTask
                                key={task.id}
                                task={task}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </li>
    );
};

export default OrganizerColumn;
