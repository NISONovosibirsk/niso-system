import React, { useEffect, useRef, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { TrashIcon } from '../../../../../../assets';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateColumns } from '../../../../../../store/actions/userOrganizerActions';
import { Button } from '../../../../../support';
import AcceptPopup from '../../../../AcceptPopup/AcceptPopup';
import OrganizerTask from '../OrganizerTask/OrganizerTask';
import './OrganizerColumn.scss';

let InnerList = ({ columnId, tasks, onDeleteTask }) =>
    tasks.map((task, index) => (
        <OrganizerTask
            key={task.id}
            columnId={columnId}
            task={task}
            index={index}
            onDeleteTask={onDeleteTask}
        />
    ));

InnerList = React.memo(InnerList);

const OrganizerColumn = ({
    column,
    columnTasks,
    index,
    onAddTask,
    onDeleteTask,
    onDeleteColumn,
}) => {
    const [isEditing, setIsEditing] = useState(column.title ? false : true);
    const [isOpen, setIsOpen] = useState(false);
    const { columns } = useTypeSelector(state => state.userOrganizer);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.select();
        }
    }, [isEditing]);

    const handleOpenPopup = () => {
        setIsOpen(true);
    };
    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const handleStartEditing = () => {
        setIsEditing(true);
    };

    const handleStopEditing = e => {
        const { value } = e.target;
        setIsEditing(false);

        if (value.trim()) {
            const newColumn = { ...column, title: value.trim() };
            dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
            return;
        }
        if (!columnTasks.length) {
            onDeleteColumn(index, column.id);
        }
    };

    const handleKeyPress = e => e.key === 'Enter' && handleStopEditing(e);

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
                    <div
                        className='organizer-column__header'
                        {...provided.dragHandleProps}
                    >
                        {isEditing ? (
                            <input
                                className='organizer-column__input'
                                defaultValue={column.title}
                                onBlur={handleStopEditing}
                                onKeyPress={handleKeyPress}
                                ref={inputRef}
                            />
                        ) : (
                            <p
                                className='organizer-column__title'
                                onClick={handleStartEditing}
                            >
                                {column.title}
                            </p>
                        )}
                        <TrashIcon
                            className='organizer-column__trash'
                            onClick={handleOpenPopup}
                        />
                    </div>

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
                                {columnTasks.length ? (
                                    <InnerList
                                        columnId={column.id}
                                        tasks={columnTasks}
                                        onDeleteTask={onDeleteTask}
                                    />
                                ) : (
                                    !snapshot.isDraggingOver && (
                                        <p className='organizer-column__placeholder'>
                                            Добавьте или перетащите задачу
                                        </p>
                                    )
                                )}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                    <Button
                        title='+ Добавить задачу'
                        onClick={() => onAddTask(column)}
                        type='light-grey'
                        margin='8px'
                        height='32px'
                        width='254px'
                    />
                    <AcceptPopup
                        title={`Удалить колонку "${column.title}"? ${
                            columnTasks.length
                                ? `Она содержит задачи: ${columnTasks.map(
                                      task => ` "${task.content}"`
                                  )}.`
                                : 'Она не содержит никаких задач.'
                        }`}
                        onClick={() => onDeleteColumn(index, column.id)}
                        isOpen={isOpen}
                        onClose={handleClosePopup}
                    />
                </li>
            )}
        </Draggable>
    );
};

export default OrganizerColumn;
