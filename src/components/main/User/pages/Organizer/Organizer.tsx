import { useState } from 'react';
import { Button } from '../../../../support';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import './Organizer.scss';
import OrganizerColumn from './OrganizerColumn/OrganizerColumn';

const Organizer = () => {
    const [organizer, setOrganizer] = useState({
        tasks: {
            'task-1': { id: 'task-1', content: '1-1' },
            'task-2': { id: 'task-2', content: '1-2' },
            'task-3': { id: 'task-3', content: '1-3' },
            'task-4': { id: 'task-4', content: '1-4' },
            'task-5': { id: 'task-5', content: '2-1' },
            'task-6': { id: 'task-6', content: '2-2' },
            'task-7': { id: 'task-7', content: '2-3' },
            'task-8': { id: 'task-8', content: '2-4' },
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To do',
                taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
            },
            'column-2': {
                id: 'column-2',
                title: 'To do',
                taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
            },
        },
        columnOrder: ['column-1', 'column-2'],
    });

    // const handleAddCol = () => {
    //     setCols([...cols, { title: cols.length + 1 + ' колонка', rows: [] }]);
    // };

    // const handleAddRow = colIndex => {
    //     const newCols = [...cols];
    //     newCols[colIndex] = {
    //         ...newCols[colIndex],
    //         rows: [...newCols[colIndex].rows, {}],
    //     };

    //     setCols(newCols);
    // };

    const handleDragEnd = ({ destination, source, draggableId }) => {
        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const column = organizer.columns[source.droppableId];
        const newTaskIds = [...column.taskIds];
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        setOrganizer({
            ...organizer,
            columns: {
                ...organizer.columns,
                [newColumn.id]: newColumn,
            },
        });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <section className='organizer'>
                <ul className='organizer__columns'>
                    {organizer.columnOrder.map(columnId => {
                        const column = organizer.columns[columnId];
                        const tasks = column.taskIds.map(
                            taskId => organizer.tasks[taskId]
                        );

                        return (
                            <OrganizerColumn
                                key={column.id}
                                column={column}
                                tasks={tasks}
                            />
                        );
                    })}
                </ul>
            </section>
        </DragDropContext>
    );
};

export default Organizer;
