import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
    DragIcon,
    OpenModalIcon,
    TrashIcon,
} from '../../../../../../../../assets';
import Modal from '../../../../../../../support/Modal/Modal';
import './ReportCreateItem.scss';
import { renderReportCreateElementInput } from '../../../../../../../../middleware';

const ReportCreateItem = ({
    element,
    onDelete,
    onUpdateElement,
    elementIndex,
}) => {
    const [isDelete, setIsDelete] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [scrollTop, setScrollTop] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const modalIconRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (null !== modalIconRef.current) {
            const elementPosition =
                modalIconRef.current?.getBoundingClientRect();

            setModalPosition({
                top: elementPosition.top,
                left: elementPosition.right - 210,
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTop, element, onDelete]);

    const handleRequiredChange = e => {
        element.isRequired = e.target.checked;

        onUpdateElement(element, elementIndex);
    };

    const handleScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleDelete = e => {
        e.preventDefault();

        handleCloseModal();

        setIsDelete(true);

        setTimeout(onDelete, 300, elementIndex);
        setTimeout(setIsDelete, 300, false);
    };

    return (
        <Draggable draggableId={elementIndex.toString()} index={elementIndex}>
            {(provided, snapshot) => (
                <li
                    className={`report-create-item ${
                        snapshot.isDragging ? 'report-create-item_dragging' : ''
                    } ${isDelete ? 'report-create-item_delete' : ''}`}
                    id={elementIndex.toString()}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className='report-create-item__content'>
                        {renderReportCreateElementInput(
                            element,
                            onUpdateElement,
                            elementIndex
                        )}
                        <div {...provided.dragHandleProps}>
                            <DragIcon className='report-create-item__drag' />
                        </div>
                    </div>
                    {element.isRequired !== undefined ? (
                        <>
                            <OpenModalIcon
                                className={`report-create-item__open-modal ${
                                    isOpen
                                        ? 'report-create-item__open-modal_active'
                                        : ''
                                }`}
                                onClick={handleOpenModal}
                                ref={modalIconRef}
                            />
                            <Modal
                                onClose={handleCloseModal}
                                isOpen={isOpen}
                                position={modalPosition}
                                type='report-create-item'
                            >
                                <label className='modal__checkbox'>
                                    <input
                                        className='modal__checkbox-input'
                                        type='checkbox'
                                        checked={element.isRequired}
                                        onChange={handleRequiredChange}
                                    />
                                    <div className='modal__checkbox-custom-checkbox'></div>
                                    Обязательное поле
                                </label>
                                <TrashIcon
                                    className='modal__trash'
                                    onClick={handleDelete}
                                />
                            </Modal>
                        </>
                    ) : (
                        <TrashIcon
                            className='report-create-item__trash'
                            onClick={handleDelete}
                        />
                    )}
                </li>
            )}
        </Draggable>
    );
};

export default ReportCreateItem;
