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
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Organizer = () => {
    const [date, setDate] = useState(new Date());
    const [scroll, setScroll] = useState(0);
    const currentDayRef = useRef(null);
    const calendarRef = useRef(null);

    //узнать положение скролла по рефу от гридов с месяцем

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        console.log(scroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scroll]);

    const handleScroll = e => {
        setScroll(window.scrollY);
    };

    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    const event = {
        title: 'Праздник',
        startDate: new Date(2022, 5, 22),
        endDate: new Date(2022, 5, 25),
    };

    const getDaysInMonth = () => {
        const days = [] as any[];

        const countDaysInMonth =
            33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();

        for (let i = 1; i <= countDaysInMonth; i++) {
            days[i] = new Date(date.getFullYear(), date.getMonth(), i);
        }

        return days;
    };

    const increaseMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
        setDate(newDate);
    };
    const reduceMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(newDate);
    };

    const increaseYaer = () => {
        const newDate = new Date(date.getFullYear() + 1, date.getMonth());
        setDate(newDate);
    };
    const reduceYaer = () => {
        const newDate = new Date(date.getFullYear() - 1, date.getMonth());
        setDate(newDate);
    };

    // const { tasks, columns, columnOrder } = useTypeSelector(
    //     state => state.userOrganizer
    // );
    // const dispatch = useDispatch();

    // const handleAddColumn = () => {
    //     const columnsKeys = Object.keys(columns);
    //     let newColumnIndex;

    //     if (columnsKeys.length) {
    //         newColumnIndex =
    //             parseInt(columnsKeys[columnsKeys.length - 1].slice(7)) + 1;
    //     } else {
    //         newColumnIndex = 1;
    //     }

    //     const newColumn = {
    //         id: 'column-' + newColumnIndex,
    //         title: '',
    //         taskIds: [],
    //     };

    //     dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
    //     dispatch(updateColumnOrder([...columnOrder, newColumn.id]));
    // };

    // const handleDeleteColumn = (columnIndex, columnId) => {
    //     const newColumnOrder = [...columnOrder];
    //     newColumnOrder.splice(columnIndex, 1);

    //     const newTasks = { ...tasks };
    //     const newColumns = { ...columns };

    //     newColumns[columnId].taskIds.forEach(taskId => {
    //         delete newTasks[taskId];
    //     });
    //     delete newColumns[columnId];

    //     dispatch(updateColumnOrder(newColumnOrder));
    //     dispatch(updateColumns(newColumns));
    //     dispatch(updateTasks(newTasks));
    // };

    // const handleAddTask = column => {
    //     const tasksKeys = Object.keys(tasks);
    //     let newTaskIndex;

    //     if (tasksKeys.length) {
    //         newTaskIndex =
    //             parseInt(tasksKeys[tasksKeys.length - 1].slice(5)) + 1;
    //     } else {
    //         newTaskIndex = 1;
    //     }

    //     const newTask = {
    //         id: 'task-' + newTaskIndex,
    //         content: '',
    //     };

    //     const newColumn = {
    //         ...column,
    //         taskIds: [...column.taskIds, newTask.id],
    //     };

    //     dispatch(updateTasks({ ...tasks, [newTask.id]: newTask }));
    //     dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
    // };

    // const handleDeleteTask = (columnId, taskIndex, taskId) => {
    //     const newColumn = { ...columns[columnId] };
    //     const newTaskIds = [...newColumn.taskIds];
    //     newTaskIds.splice(taskIndex, 1);

    //     const newTasks = { ...tasks };
    //     delete newTasks[taskId];

    //     const newColumns = {
    //         ...columns,
    //         [newColumn.id]: { ...newColumn, taskIds: newTaskIds },
    //     };

    //     dispatch(updateColumns(newColumns));
    //     dispatch(updateTasks(newTasks));
    // };

    // const handleDragEnd = ({ destination, source, draggableId, type }) => {
    //     if (!destination) {
    //         if (type === 'column') {
    //             handleDeleteColumn(source.index, draggableId);
    //             return;
    //         }

    //         handleDeleteTask(source.droppableId, source.index, draggableId);
    //         return;
    //     }

    //     if (
    //         source.droppableId === destination.droppableId &&
    //         source.index === destination.index
    //     ) {
    //         return;
    //     }

    //     if (type === 'column') {
    //         const newColumnOrder = [...columnOrder];
    //         newColumnOrder.splice(source.index, 1);
    //         newColumnOrder.splice(destination.index, 0, draggableId);

    //         dispatch(updateColumnOrder(newColumnOrder));
    //         return;
    //     }

    //     const start = columns[source.droppableId];
    //     const finish = columns[destination.droppableId];

    //     if (start === finish) {
    //         const newTaskIds = [...start.taskIds];
    //         newTaskIds.splice(source.index, 1);
    //         newTaskIds.splice(destination.index, 0, draggableId);

    //         const newColumn = {
    //             ...start,
    //             taskIds: newTaskIds,
    //         };

    //         dispatch(updateColumns({ ...columns, [newColumn.id]: newColumn }));
    //         return;
    //     }

    //     const startTaskIds = [...start.taskIds];
    //     startTaskIds.splice(source.index, 1);
    //     const newStart = {
    //         ...start,
    //         taskIds: startTaskIds,
    //     };

    //     const finishTaskIds = [...finish.taskIds];
    //     finishTaskIds.splice(destination.index, 0, draggableId);
    //     const newFinish = {
    //         ...finish,
    //         taskIds: finishTaskIds,
    //     };

    //     const newColumns = {
    //         ...columns,
    //         [newStart.id]: newStart,
    //         [newFinish.id]: newFinish,
    //     };

    //     dispatch(updateColumns(newColumns));
    // };

    return (
        <section className='organizer'>
            <div className='organizer__calendar'>
                <button className='organizer__button' onClick={reduceYaer}>
                    {'<<'}
                </button>
                <button className='organizer__button' onClick={reduceMonth}>
                    {'<'}
                </button>
                <p className='organizer__date'>
                    <span>{monthNames[date.getMonth()]} </span>
                    <span>{date.getFullYear()}</span>
                </p>
                <button className='organizer__button' onClick={increaseMonth}>
                    {'>'}
                </button>
                <button className='organizer__button' onClick={increaseYaer}>
                    {'>>'}
                </button>
                <div className='organizer__month-days'>
                    {getDaysInMonth().map(monthDay =>
                        new Date().setHours(0, 0, 0, 0) ===
                        monthDay.getTime() ? (
                            <div
                                className='organizer__month-day organizer__month-day_current'
                                key={monthDay}
                                ref={currentDayRef}
                            ></div>
                        ) : (
                            <div
                                className='organizer__month-day'
                                key={monthDay}
                            >
                                {weekdays[monthDay.getDay()]}
                                <br></br>
                                {monthDay.getDate()}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
        // <DragDropContext onDragEnd={handleDragEnd}>
        //     <section className='organizer'>
        //         <Droppable
        //             droppableId='columns'
        //             direction='horizontal'
        //             type='column'
        //         >
        //             {(provided, snapshot) => (
        //                 <ul
        //                     className='organizer__columns'
        //                     ref={provided.innerRef}
        //                     {...provided.droppableProps}
        //                 >
        //                     {columnOrder.map((columnId, index) => {
        //                         const column = columns[columnId];
        //                         const columnTasks = column.taskIds.map(
        //                             taskId => tasks[taskId]
        //                         );

        //                         return (
        //                             <OrganizerColumn
        //                                 key={column.id}
        //                                 column={column}
        //                                 columnTasks={columnTasks}
        //                                 index={index}
        //                                 onAddTask={handleAddTask}
        //                                 onDeleteTask={handleDeleteTask}
        //                                 onDeleteColumn={handleDeleteColumn}
        //                             />
        //                         );
        //                     })}
        //                     {provided.placeholder}
        //                     <li
        //                         className='organizer__button'
        //                         style={
        //                             snapshot.isDraggingOver
        //                                 ? {
        //                                       transform:
        //                                           'translate(272px, 0px)',
        //                                   }
        //                                 : {
        //                                       transition:
        //                                           'transform 0.2s cubic-bezier(0.2, 0, 0, 1)',
        //                                   }
        //                         }
        //                     >
        //                         <Button
        //                             title='+ Добавить колонку'
        //                             onClick={handleAddColumn}
        //                             type='light-grey'
        //                         />
        //                     </li>
        //                 </ul>
        //             )}
        //         </Droppable>
        //     </section>
        // </DragDropContext>
    );
};

export default Organizer;
