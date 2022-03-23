import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import {
    setIsOpen,
    updateElements,
} from '../../../../../../../store/actions/userConstrucorActions';
import { Button } from '../../../../../../support';
import ReportCreateItem from '../ReportCreateItem/ReportCreateItem';
import ReportCreatePopup from '../ReportCreatePopup/ReportCreatePopup';
import './ReportCreateElementsField.scss';

const ReportCreateElementsField = ({ elements }) => {
    const [fieldClass, setFieldClass] = useState('');
    const dispatch = useDispatch();

    const handleDragStart = () => {
        setFieldClass('report-create-elements-field_valid');
    };

    const handleDragEnd = ({ destination, source }) => {
        const newElements = [...elements];

        if (!destination) {
            newElements.splice(source.index, 1);

            dispatch(updateElements(newElements));
        } else if (source.droppableId === destination.droppableId) {
            newElements.splice(
                destination.index,
                0,
                ...newElements.splice(source.index, 1)
            );

            dispatch(updateElements(newElements));
        }

        setFieldClass('');
    };

    const handleDragUpdate = ({ destination }) => {
        if (!destination) {
            setFieldClass('report-create-elements-field_invalid');
        } else {
            setFieldClass('report-create-elements-field_valid');
        }
    };

    const handleChangeItemValue = (element, index) => {
        const newElements = [...elements];
        newElements[index] = { ...element };

        dispatch(updateElements(newElements));
    };

    const handleDeleteElement = index => {
        const newElements = [...elements];
        newElements.splice(index, 1);

        dispatch(updateElements(newElements));
    };

    const handleAddElements = e => {
        e.preventDefault();
        dispatch(setIsOpen(true));
    };

    return (
        <DragDropContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragUpdate={handleDragUpdate}
        >
            <Droppable droppableId={'reportCreateList'}>
                {provided => (
                    <div
                        className={`report-create-elements-field ${fieldClass}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <ul className='report-create-elements-field__list'>
                            {elements.map((element, index) => (
                                <ReportCreateItem
                                    element={element}
                                    onDelete={handleDeleteElement}
                                    onChangeItemValue={handleChangeItemValue}
                                    index={index}
                                    key={index}
                                />
                            ))}
                            {provided.placeholder}
                        </ul>
                        <Button
                            title='Добавить поле'
                            onClick={handleAddElements}
                            height='28px'
                            margin={'auto 0 0'}
                            type='light-grey'
                        />
                    </div>
                )}
            </Droppable>
            <ReportCreatePopup />
        </DragDropContext>
    );
};

export default ReportCreateElementsField;
