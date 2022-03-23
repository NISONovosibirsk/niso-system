import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
    DragIcon,
    OpenModalIcon,
    TrashIcon,
} from '../../../../../../../assets';
import Modal from '../../../../../../support/Modal/Modal';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import ImageInput from './ImageInput/ImageInput';
import ListInput from './ListInput/ListInput';
import RadioInput from './RadioInput/RadioInput';
import TextList from './TextList/TextList';
import './ReportCreateItem.scss';

const ReportCreateItem = ({ element, onDelete, onChangeItemValue, index }) => {
    const [isDelete, setIsDelete] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({
        top: 0,
        left: 0,
    });
    const [scrollTop, setScrollTop] = useState(0);
    const modalIconRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (null !== modalIconRef.current) {
            const elementPosition =
                modalIconRef.current?.getBoundingClientRect();

            setModalPosition({
                top: elementPosition.top + 6,
                left: elementPosition.left - 210,
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTop, element, onDelete]);

    const renderElement = () => {
        switch (element.type) {
            case 'text':
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                return (
                    <input
                        className='report-create-item__input report-create-item__input_underline'
                        value={element.value}
                        onChange={handleInputValueChange}
                        placeholder={element.placeholder}
                    />
                );
            case 'image':
                return (
                    <ImageInput
                        element={element}
                        onChangeItemValue={onChangeItemValue}
                        index={index}
                    />
                );
            case 'textList':
                return (
                    <TextList
                        element={element}
                        onChangeItemValue={onChangeItemValue}
                        index={index}
                    />
                );
            case 'checkbox':
                return (
                    <CheckboxInput
                        element={element}
                        onChangeItemValue={onChangeItemValue}
                        index={index}
                    />
                );
            case 'radio':
                return (
                    <RadioInput
                        element={element}
                        onChangeItemValue={onChangeItemValue}
                        index={index}
                    />
                );
            case 'list':
                return (
                    <ListInput
                        element={element}
                        onChangeItemValue={onChangeItemValue}
                        index={index}
                    />
                );
            default:
                return (
                    <input
                        className='report-create-item__input'
                        value={element.value}
                        onChange={handleInputValueChange}
                        placeholder={element.placeholder}
                    />
                );
        }
    };

    const handleInputValueChange = e => {
        const { value } = e.target;
        element.value = value;

        onChangeItemValue(element, index);
    };

    const handleRequiredChange = e => {
        element.isRequired = e.target.checked;

        onChangeItemValue(element, index);
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

        setTimeout(onDelete, 300, index);
        setTimeout(setIsDelete, 300, false);
    };

    return (
        <Draggable draggableId={index.toString()} index={index}>
            {(provided, snapshot) => (
                <li
                    className={`report-create-item ${
                        snapshot.isDragging ? 'report-create-item_dragging' : ''
                    } ${isDelete ? 'report-create-item_delete' : ''}`}
                    id={index.toString()}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className='report-create-item__content'>
                        {renderElement()}
                        <DragIcon className='report-create-item__drag' />
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
