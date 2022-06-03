import React, { useEffect, useRef, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import OrganizerTask from '../OrganizerTask/OrganizerTask';
import './OrganizerColumn.scss';

let InnerList = ({ tasks }) =>
    tasks.map((task, index) => (
        <OrganizerTask key={task.id} task={task} index={index} />
    ));

InnerList = React.memo(InnerList);

const OrganizerColumn = ({ column, tasks, index, onTitleChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.select();
        }
    }, [isEditing]);

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const handleBlur = e => {
        setIsEditing(false);
    };

    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided, snapshot) => (
                <li
                    className={`organizer-column ${
                        snapshot.isDragging && 'organizer-column_dragging'
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    {isEditing ? (
                        <input
                            className='organizer-column__input'
                            value={column.title}
                            onChange={e => onTitleChange(e, column)}
                            onBlur={handleBlur}
                            onKeyPress={handleKeyPress}
                            ref={inputRef}
                            {...provided.dragHandleProps}
                        />
                    ) : (
                        <p
                            className='organizer-column__title'
                            onClick={handleStartEditing}
                            {...provided.dragHandleProps}
                        >
                            {column.title}
                        </p>
                    )}
                    <Droppable droppableId={column.id} type='task'>
                        {(provided, snapshot) => (
                            <ul
                                className={`organizer-column__tasks ${
                                    snapshot.isDraggingOver &&
                                    'organizer-column__tasks_dragging-over'
                                }`}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <InnerList tasks={tasks} />
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </li>
            )}
        </Draggable>
    );
};

export default OrganizerColumn;
