import { useState } from 'react';
import { Button } from '../../../../support';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './Organizer.scss';
import OrganizerColumn from './OrganizerColumn/OrganizerColumn';

const Organizer = () => {
    const [organizer, setOrganizer] = useState({
        tasks: {
            'task-1': { id: 'task-1', content: '1-1' },
            'task-2': { id: 'task-2', content: '1-2' },
            'task-3': { id: 'task-3', content: '1-3' },
            'task-4': { id: 'task-4', content: '1-4' },
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To do',
                taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
            },
            'column-2': {
                id: 'column-2',
                title: 'In progress',
                taskIds: [],
            },
            'column-3': {
                id: 'column-3',
                title: 'Done',
                taskIds: [],
            },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
    });

    const handleColumnTitleChange = (e, column) => {
        const newColumn = { ...organizer.columns[column.id] };
        newColumn.title = e.target.value;

        setOrganizer({
            ...organizer,
            columns: {
                ...organizer.columns,
                [newColumn.id]: newColumn,
            },
        });
    };

    const handleDragEnd = ({ destination, source, draggableId, type }) => {
        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = [...organizer.columnOrder];
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            setOrganizer({
                ...organizer,
                columnOrder: newColumnOrder,
            });
            return;
        }

        const start = organizer.columns[source.droppableId];
        const finish = organizer.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = [...start.taskIds];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            setOrganizer({
                ...organizer,
                columns: {
                    ...organizer.columns,
                    [newColumn.id]: newColumn,
                },
            });
            return;
        }

        const startTaskIds = [...start.taskIds];
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = [...finish.taskIds];
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        setOrganizer({
            ...organizer,
            columns: {
                ...organizer.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className='organizer'>
                <Droppable
                    droppableId='columns'
                    direction='horizontal'
                    type='column'
                >
                    {provided => (
                        <ul
                            className='organizer__columns'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {organizer.columnOrder.map((columnId, index) => {
                                const column = organizer.columns[columnId];
                                const tasks = column.taskIds.map(
                                    taskId => organizer.tasks[taskId]
                                );

                                return (
                                    <OrganizerColumn
                                        key={column.id}
                                        column={column}
                                        tasks={tasks}
                                        index={index}
                                        onTitleChange={handleColumnTitleChange}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </section>
        </DragDropContext>
    );
};

export default Organizer;
