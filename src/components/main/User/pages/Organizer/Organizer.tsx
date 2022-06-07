import { Button } from '../../../../support';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './Organizer.scss';
import OrganizerColumn from './OrganizerColumn/OrganizerColumn';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import {
    updateColumnOrder,
    updateColumns,
    updateTasks,
} from '../../../../../store/actions/userOrganizerActions';

const Organizer = () => {
    const { tasks, columns, columnOrder } = useTypeSelector(
        state => state.userOrganizer
    );
    const dispatch = useDispatch();

    const handleAddColumn = () => {
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
            title: '',
            taskIds: [],
        };

        dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
        dispatch(updateColumnOrder([...columnOrder, newColumn.id]));
    };

    const handleDeleteColumn = (columnIndex, columnId) => {
        const newColumnOrder = [...columnOrder];
        newColumnOrder.splice(columnIndex, 1);

        const newTasks = { ...tasks };
        const newColumns = { ...columns };

        newColumns[columnId].taskIds.forEach(taskId => {
            delete newTasks[taskId];
        });
        delete newColumns[columnId];

        dispatch(updateColumnOrder(newColumnOrder));
        dispatch(updateColumns(newColumns));
        dispatch(updateTasks(newTasks));
    };

    const handleAddTask = column => {
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
            content: '',
        };

        const newColumn = {
            ...column,
            taskIds: [...column.taskIds, newTask.id],
        };

        dispatch(updateTasks({ ...tasks, [newTask.id]: newTask }));
        dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
    };

    const handleDeleteTask = (columnId, taskIndex, taskId) => {
        const newColumn = { ...columns[columnId] };
        const newTaskIds = [...newColumn.taskIds];
        newTaskIds.splice(taskIndex, 1);

        const newTasks = { ...tasks };
        delete newTasks[taskId];

        const newColumns = {
            ...columns,
            [newColumn.id]: { ...newColumn, taskIds: newTaskIds },
        };

        dispatch(updateColumns(newColumns));
        dispatch(updateTasks(newTasks));
    };

    const handleDragEnd = ({ destination, source, draggableId, type }) => {
        if (!destination) {
            if (type === 'column') {
                handleDeleteColumn(source.index, draggableId);
                return;
            }

            handleDeleteTask(source.droppableId, source.index, draggableId);
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = [...columnOrder];
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            dispatch(updateColumnOrder(newColumnOrder));
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = [...start.taskIds];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
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

        const newColumns = {
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
        };

        dispatch(updateColumns(newColumns));
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
                            {columnOrder.map((columnId, index) => {
                                const column = columns[columnId];
                                const columnTasks = column.taskIds.map(
                                    taskId => tasks[taskId]
                                );

                                return (
                                    <OrganizerColumn
                                        key={column.id}
                                        column={column}
                                        columnTasks={columnTasks}
                                        index={index}
                                        onAddTask={handleAddTask}
                                        onDeleteTask={handleDeleteTask}
                                        onDeleteColumn={handleDeleteColumn}
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
