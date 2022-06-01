import { useState } from 'react';
import { Button } from '../../../../support';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Organizer.scss';

const Organizer = () => {
    const [cols, setCols] = useState([] as any[]);

    const handleAddCol = () => {
        setCols([...cols, { title: cols.length + 1 + ' колонка', rows: [] }]);
    };

    const handleAddRow = colIndex => {
        const newCols = [...cols];
        newCols[colIndex] = {
            ...newCols[colIndex],
            rows: [...newCols[colIndex].rows, {}],
        };

        setCols(newCols);
    };

    return (
        <section className='organizer'>
            <DragDropContext>
                <Droppable droppableId='organizerCols' direction='horizontal'>
                    {provided => (
                        <ul
                            className='organizer__cols'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {cols.map((col, colIndex) => (
                                <Draggable
                                    draggableId={colIndex.toString()}
                                    index={colIndex}
                                    key={colIndex}
                                >
                                    {(provided, snapshot) => (
                                        <li
                                            className='organizer__col'
                                            id={colIndex.toString()}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            <p className='organizer__col-title'>
                                                {col.title}
                                            </p>
                                            <DragDropContext>
                                                <Droppable droppableId='organizerRows'>
                                                    {provided => (
                                                        <ul
                                                            className='organizer__rows'
                                                            {...provided.droppableProps}
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                        >
                                                            {col.rows.map(
                                                                (
                                                                    row,
                                                                    rowIndex
                                                                ) => (
                                                                    <Draggable
                                                                        draggableId={rowIndex.toString()}
                                                                        index={
                                                                            rowIndex
                                                                        }
                                                                        key={
                                                                            rowIndex
                                                                        }
                                                                    >
                                                                        {(
                                                                            provided,
                                                                            snapshot
                                                                        ) => (
                                                                            <li
                                                                                className='organizer__row'
                                                                                id={rowIndex.toString()}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                ref={
                                                                                    provided.innerRef
                                                                                }
                                                                                key={
                                                                                    rowIndex
                                                                                }
                                                                            ></li>
                                                                        )}
                                                                    </Draggable>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </Droppable>
                                            </DragDropContext>
                                            <Button
                                                title='Добавить строчку'
                                                onClick={() =>
                                                    handleAddRow(colIndex)
                                                }
                                                type='light-grey'
                                            />
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            <li className='organizer__col organizer__col_add'>
                                <Button
                                    title='Добавить колонку'
                                    onClick={handleAddCol}
                                    type='light-grey'
                                />
                            </li>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    );
};

export default Organizer;
