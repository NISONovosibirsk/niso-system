import { useState } from 'react';
import { Button } from '../../../../support';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './Organizer.scss';
import OrganizerColumn from './OrganizerColumn/OrganizerColumn';

const Organizer = () => {
    const [organizer, setOrganizer] = useState({
        tasks: {},
        columns: {
            // 'column-1': {
            //     id: 'column-1',
            //     title: 'To do',
            //     taskIds: [],
            // },
        },
        columnOrder: [] as any[],
    });

    const handleAddColumn = () => {
        const columns = { ...organizer.columns };
        const columnsKeys = Object.keys(columns);
        let newColumnIndex;

        if (columnsKeys.length) {
            newColumnIndex =
                parseInt(columnsKeys[columnsKeys.length - 1].slice(7)) + 1;
        } else {
            newColumnIndex = 1;
        }

        const newColumn = {
            id: 'column-' + newColumnIndex,
            title: 'TItle here',
            taskIds: [],
        };

        setOrganizer({
            ...organizer,
            columns: {
                ...organizer.columns,
                [newColumn.id]: newColumn,
            },
            columnOrder: [...organizer.columnOrder, newColumn.id],
        });
    };

    const handleAddTask = column => {
        const tasks = { ...organizer.tasks };
        const tasksKeys = Object.keys(tasks);
        let newTaskIndex;

        if (tasksKeys.length) {
            newTaskIndex =
                parseInt(tasksKeys[tasksKeys.length - 1].slice(5)) + 1;
        } else {
            newTaskIndex = 1;
        }

        const newTask = {
            id: 'task-' + newTaskIndex,
            content: 'task-' + newTaskIndex,
        };

        const newColumns = {
            ...organizer.columns,
            [column.id]: {
                ...column,
                taskIds: [...column.taskIds, newTask.id],
            },
        };

        setOrganizer({
            ...organizer,
            tasks: {
                ...organizer.tasks,
                [newTask.id]: newTask,
            },
            columns: newColumns,
        });
    };

    const handleColumnTitleChange = (e, column) => {
        const newColumn = {
            ...organizer.columns[column.id],
            title: e.target.value,
        };

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
            if (type === 'column') {
                const newColumnOrder = [...organizer.columnOrder];
                newColumnOrder.splice(source.index, 1);

                const newTasks = { ...organizer.tasks };
                const newColumns = { ...organizer.columns };

                newColumns[draggableId].taskIds.forEach(taskId => {
                    delete newTasks[taskId];
                });
                delete newColumns[draggableId];

                setOrganizer({
                    ...organizer,
                    tasks: newTasks,
                    columns: newColumns,
                    columnOrder: newColumnOrder,
                });

                return;
            }

            const newColumn = { ...organizer.columns[source.droppableId] };
            const newTaskIds = [...newColumn.taskIds];
            newTaskIds.splice(source.index, 1);

            const newTasks = { ...organizer.tasks };
            delete newTasks[draggableId];

            setOrganizer({
                ...organizer,
                tasks: newTasks,
                columns: {
                    ...organizer.columns,
                    [newColumn.id]: { ...newColumn, taskIds: newTaskIds },
                },
            });
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
                    {(provided, snapshot) => (
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
                                        onAddTask={handleAddTask}
                                    />
                                );
                            })}
                            {provided.placeholder}
                            <li
                                className='organizer__button'
                                style={
                                    snapshot.isDraggingOver
                                        ? {
                                              transform:
                                                  'translate(272px, 0px)',
                                          }
                                        : {
                                              transition:
                                                  'transform 0.2s cubic-bezier(0.2, 0, 0, 1)',
                                          }
                                }
                            >
                                <Button
                                    title='+ Добавить колонку'
                                    onClick={handleAddColumn}
                                    type='light-grey'
                                />
                            </li>
                        </ul>
                    )}
                </Droppable>
            </section>
        </DragDropContext>
    );
};

export default Organizer;
