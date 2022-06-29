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
import OrganizerEvent from './OrganizerEvent/OrganizerEvent';
import { getNumberOfDaysInAMonth } from '../../../../../middleware';
import OrganizerMonthTitle from './OrganizerMonthTitle/OrganizerMonthTitle';

const Organizer = () => {
    const [date, setDate] = useState(new Date());
    const [scroll, setScroll] = useState(0);
    const [events, setEvents] = useState([
        {
            title: 'Тина',
            startDate: new Date(2022, 6, 25),
            endDate: new Date(2022, 7, 1),
            color: '#87ceeb',
        },
        {
            title: 'Праздник',
            startDate: new Date(2022, 6, 22),
            endDate: new Date(2022, 6, 24),
            color: '#f08080',
        },
        {
            title: 'В школу',
            startDate: new Date(2022, 7, 1),
            endDate: new Date(2022, 7, 1),
            color: '#f08080',
        },
        {
            title: 'Праздник 3',
            startDate: new Date(2022, 5, 22),
            endDate: new Date(2022, 5, 24),
            color: '#f08080',
        },
        {
            title: 'Праздник 2',
            startDate: new Date(2022, 6, 20),
            endDate: new Date(2022, 6, 25),
            color: '#90ee90',
        },
    ]);
    const [filteredEvents, setFilteredEvents] = useState([] as {}[]);

    const currentDayRef = useRef<HTMLDivElement>(null);

    const dayWidth = 58;
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    useEffect(() => {
        setFilteredEvents(
            events.filter(
                event =>
                    (event.startDate.getFullYear() === date.getFullYear() &&
                        event.startDate.getMonth() === date.getMonth()) ||
                    event.startDate.getMonth() === date.getMonth() - 1 ||
                    event.startDate.getMonth() === date.getMonth() + 1
            )
        );
    }, [date, events]);

    useLayoutEffect(() => {
        if (null !== currentDayRef.current) {
            currentDayRef.current.scrollIntoView();
        }
    }, []);

    const handleScroll = e => {
        setScroll(e.target.scrollLeft);

        if (
            e.target.scrollLeft >
            (getCountDaysInMonth(date.getMonth() - 1) +
                getCountDaysInMonth(date.getMonth())) *
                dayWidth +
                100
        ) {
            e.target.scrollLeft =
                getCountDaysInMonth(date.getMonth()) * dayWidth + 100;
            setTimeout(() => increaseMonth(), 2);
        }

        if (
            e.target.scrollLeft <
            getCountDaysInMonth(date.getMonth() - 1) * dayWidth - 100
        ) {
            e.target.scrollLeft =
                (getCountDaysInMonth(date.getMonth() - 2) +
                    getCountDaysInMonth(date.getMonth() - 1)) *
                    dayWidth -
                100;
            setTimeout(() => reduceMonth(), 2);
        }
    };

    const getDaysInAThreeMonths = () => {
        const days = [] as any[];

        const curYear = date.getFullYear();
        const curMonth = date.getMonth();

        const numberOfDaysInAThreeMonths =
            getNumberOfDaysInAMonth(curYear, curMonth) +
            getNumberOfDaysInAMonth(curYear, curMonth - 1) +
            getNumberOfDaysInAMonth(curYear, curMonth + 1);

        for (let i = 1; i <= numberOfDaysInAThreeMonths; i++) {
            days[i] = new Date(curYear, curMonth - 1, i);
        }

        return days;
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleCreateEvent = () => {
        const newEvent = {
            title: '',
            startDate: new Date(),
            endDate: new Date(),
            color: '',
        };

        newEvent.title = 'Событие ' + (events.length + 1);
        newEvent.startDate = new Date(2022, 5, events.length * 3 + 1);
        newEvent.endDate = new Date(2022, 5, events.length * 3 + 3);
        newEvent.color = getRandomColor();

        setEvents([...events, newEvent]);
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
            <Button
                title='Создать событие'
                onClick={handleCreateEvent}
            ></Button>
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
                <div className='organizer__month' onScroll={handleScroll}>
                    <OrganizerMonthTitle
                        scroll={scroll}
                        year={date.getFullYear()}
                        month={date.getMonth() - 1}
                    />
                    <OrganizerMonthTitle
                        scroll={
                            scroll -
                            getCountDaysInMonth(date.getMonth() - 1) * dayWidth
                        }
                        year={date.getFullYear()}
                        month={date.getMonth()}
                    />
                    <OrganizerMonthTitle
                        scroll={
                            scroll -
                            (getCountDaysInMonth(date.getMonth() - 1) +
                                getCountDaysInMonth(date.getMonth())) *
                                dayWidth
                        }
                        year={date.getFullYear()}
                        month={date.getMonth() + 1}
                    />
                    {getDaysInAThreeMonths().map((monthDay, index) =>
                        new Date().setHours(0, 0, 0, 0) ===
                        monthDay.getTime() ? (
                            <div
                                className='organizer__day organizer__day_current'
                                key={monthDay}
                                ref={currentDayRef}
                                style={{ gridColumnStart: index }}
                            >
                                {weekdays[monthDay.getDay()]}
                                <br></br>
                                {monthDay.getDate()}
                            </div>
                        ) : (
                            <div
                                className='organizer__day'
                                key={monthDay}
                                style={{ gridColumnStart: index }}
                            >
                                {weekdays[monthDay.getDay()]}
                                <br></br>
                                {monthDay.getDate()}
                            </div>
                        )
                    )}
                    <div
                        className='organizer__events'
                        style={{
                            gridColumn: `1 / ${
                                getNumberOfDaysInAMonth(
                                    date.getFullYear(),
                                    date.getMonth()
                                ) +
                                getNumberOfDaysInAMonth(
                                    date.getFullYear(),
                                    date.getMonth() - 1
                                ) +
                                getNumberOfDaysInAMonth(
                                    date.getFullYear(),
                                    date.getMonth() + 1
                                ) +
                                1
                            }`,
                        }}
                    >
                        {filteredEvents.map((event, index) => (
                            <OrganizerEvent
                                key={index}
                                event={event}
                                date={date}
                            />
                        ))}
                    </div>
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
