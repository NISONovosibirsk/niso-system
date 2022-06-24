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

    const [prevMonthWidth, setPrevMonthWidth] = useState(0);
    const prevMonthRef = useRef<HTMLParagraphElement>(null);

    const [currentMonthWidth, setCurrentMonthWidth] = useState(0);
    const currentMonthRef = useRef<HTMLParagraphElement>(null);

    const [nextMonthWidth, setNextMonthWidth] = useState(0);
    const NextMonthRef = useRef<HTMLParagraphElement>(null);

    const currentDayRef = useRef<HTMLDivElement>(null);

    const dayWidth = 58 + 4;
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
    const events = [
        {
            title: 'Тина',
            startDate: new Date(2022, 6, 25),
            endDate: new Date(2022, 6, 29),
            color: 'skyblue',
        },
        {
            title: 'Праздник',
            startDate: new Date(2022, 6, 22),
            endDate: new Date(2022, 6, 24),
            color: '#f08080',
        },
        {
            title: 'Праздник 2',
            startDate: new Date(2022, 6, 20),
            endDate: new Date(2022, 6, 25),
            color: '#90ee90',
        },
    ];

    useEffect(() => {
        if (null !== prevMonthRef.current) {
            setPrevMonthWidth(
                prevMonthRef.current.getBoundingClientRect().width
            );
        }
        if (null !== currentMonthRef.current) {
            setCurrentMonthWidth(
                currentMonthRef.current.getBoundingClientRect().width
            );
        }
        if (null !== NextMonthRef.current) {
            setNextMonthWidth(
                NextMonthRef.current.getBoundingClientRect().width
            );
        }
    }, [date]);

    useLayoutEffect(() => {
        if (null !== currentDayRef.current) {
            currentDayRef.current.scrollIntoView();
        }
    }, []);

    const handleScroll = e => {
        setScroll(e.target.scrollLeft);

        // if (
        //     e.target.scrollLeft >
        //     (getCountDaysInMonth(date.getMonth() - 1) +
        //         getCountDaysInMonth(date.getMonth())) *
        //         dayWidth +
        //         100
        // ) {
        //     e.target.scrollLeft =
        //         getCountDaysInMonth(date.getMonth()) * dayWidth + 100;
        //     setTimeout(() => increaseMonth(), 2);
        // }

        // if (
        //     e.target.scrollLeft <
        //     getCountDaysInMonth(date.getMonth() - 1) * dayWidth - 100
        // ) {
        //     e.target.scrollLeft =
        //         (getCountDaysInMonth(date.getMonth() - 2) +
        //             getCountDaysInMonth(date.getMonth() - 1)) *
        //             dayWidth -
        //         100;
        //     setTimeout(() => reduceMonth(), 2);
        // }
    };

    const getDaysInMonth = month => {
        const days = [] as any[];

        const countDaysInMonth = getCountDaysInMonth(month);

        for (let i = 1; i <= countDaysInMonth; i++) {
            days[i] = new Date(date.getFullYear(), month, i);
        }

        return days;
    };

    const getCountDaysInMonth = month =>
        33 - new Date(date.getFullYear(), month, 33).getDate();

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
                <p className='organizer__date'>{date.getFullYear()}</p>
                <button className='organizer__button' onClick={increaseYaer}>
                    {'>>'}
                </button>
                <button className='organizer__button' onClick={reduceMonth}>
                    {'<'}
                </button>
                <div className='organizer__month-days' onScroll={handleScroll}>
                    <p
                        className='organizer__date organizer__date_month'
                        ref={prevMonthRef}
                        style={{
                            gridColumn: `1 / span ${getCountDaysInMonth(
                                date.getMonth() - 1
                            )}`,
                            position:
                                scroll >
                                getCountDaysInMonth(date.getMonth() - 1) *
                                    dayWidth -
                                    prevMonthWidth
                                    ? 'static'
                                    : 'sticky',
                            margin:
                                scroll >
                                getCountDaysInMonth(date.getMonth() - 1) *
                                    dayWidth -
                                    prevMonthWidth
                                    ? '0 0 0 auto'
                                    : '',
                        }}
                    >
                        {monthNames[date.getMonth() - 1]}
                    </p>
                    <p
                        className='organizer__date organizer__date_month'
                        ref={currentMonthRef}
                        style={{
                            gridColumn: `${
                                getCountDaysInMonth(date.getMonth() - 1) + 1
                            } / span ${getCountDaysInMonth(date.getMonth())}`,
                            position:
                                scroll -
                                    getCountDaysInMonth(date.getMonth() - 1) *
                                        dayWidth >
                                getCountDaysInMonth(date.getMonth()) *
                                    dayWidth -
                                    currentMonthWidth
                                    ? 'static'
                                    : 'sticky',
                            margin:
                                scroll -
                                    getCountDaysInMonth(date.getMonth() - 1) *
                                        dayWidth >
                                getCountDaysInMonth(date.getMonth()) *
                                    dayWidth -
                                    currentMonthWidth
                                    ? '0 0 0 auto'
                                    : '',
                        }}
                    >
                        {monthNames[date.getMonth()]}
                    </p>
                    <p
                        className='organizer__date organizer__date_month'
                        ref={NextMonthRef}
                        style={{
                            gridColumn: `${
                                getCountDaysInMonth(date.getMonth() - 1) +
                                getCountDaysInMonth(date.getMonth()) +
                                1
                            } / span ${getCountDaysInMonth(
                                date.getMonth() + 1
                            )}`,
                            position:
                                scroll -
                                    (getCountDaysInMonth(date.getMonth() - 1) +
                                        getCountDaysInMonth(date.getMonth())) *
                                        dayWidth >
                                getCountDaysInMonth(date.getMonth() + 1) *
                                    dayWidth -
                                    nextMonthWidth
                                    ? 'static'
                                    : 'sticky',
                            margin:
                                scroll -
                                    (getCountDaysInMonth(date.getMonth() - 1) +
                                        getCountDaysInMonth(date.getMonth())) *
                                        dayWidth >
                                getCountDaysInMonth(date.getMonth()) *
                                    dayWidth -
                                    nextMonthWidth
                                    ? '0 0 0 auto'
                                    : '',
                        }}
                    >
                        {monthNames[date.getMonth() + 1]
                            ? monthNames[date.getMonth() + 1]
                            : 'Январь'}
                    </p>
                    {getDaysInMonth(date.getMonth() - 1).map(monthDay =>
                        new Date().setHours(0, 0, 0, 0) ===
                        monthDay.getTime() ? (
                            <div
                                className='organizer__month-day organizer__month-day_current'
                                key={monthDay}
                                ref={currentDayRef}
                            >
                                {weekdays[monthDay.getDay()]}
                                <br></br>
                                {monthDay.getDate()}
                            </div>
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
                    {getDaysInMonth(date.getMonth()).map(monthDay =>
                        new Date().setHours(0, 0, 0, 0) ===
                        monthDay.getTime() ? (
                            <div
                                className='organizer__month-day organizer__month-day_current'
                                key={monthDay}
                                ref={currentDayRef}
                            >
                                {weekdays[monthDay.getDay()]}
                                <br></br>
                                {monthDay.getDate()}
                            </div>
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
                    {getDaysInMonth(date.getMonth() + 1).map(monthDay => (
                        <>
                            {new Date().setHours(0, 0, 0, 0) ===
                            monthDay.getTime() ? (
                                <div
                                    className='organizer__month-day organizer__month-day_current'
                                    key={monthDay}
                                    ref={currentDayRef}
                                >
                                    {weekdays[monthDay.getDay()]}
                                    <br></br>
                                    {monthDay.getDate()}
                                </div>
                            ) : (
                                <div
                                    className='organizer__month-day'
                                    key={monthDay}
                                >
                                    {weekdays[monthDay.getDay()]}
                                    <br></br>
                                    {monthDay.getDate()}
                                </div>
                            )}
                            {events
                                .filter(
                                    event =>
                                        event.startDate.getTime() ===
                                        monthDay.getTime()
                                )
                                .map((event, index) => (
                                    <div
                                        className='organizer__event'
                                        key={index}
                                        style={{
                                            gridColumn: `${
                                                getCountDaysInMonth(
                                                    date.getMonth() - 1
                                                ) +
                                                getCountDaysInMonth(
                                                    date.getMonth()
                                                ) +
                                                event.startDate.getDate()
                                            } / span ${
                                                event.endDate.getDate() -
                                                event.startDate.getDate() +
                                                1
                                            }`,
                                            background: event.color,
                                        }}
                                    >
                                        {event.title}
                                    </div>
                                ))}
                        </>
                    ))}
                </div>
                <button className='organizer__button' onClick={increaseMonth}>
                    {'>'}
                </button>
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
