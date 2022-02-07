import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import {
    lableChange,
    removeElement,
    setRequired,
    valueChange,
} from '../../store/actions/formActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IFormElement } from '../../interfaces';
import { dragableIcon, removeButtonIcon } from '../../assets';

const FormElement = ({ item, id, index }: IFormElement) => {
    const { constructor } = useTypeSelector(state => state.form);

    const dispatch = useDispatch();

    // change title of element
    const handleTitleChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].title = e.target.value;
        dispatch(lableChange(newState));
    };

    // change value of element
    const handleValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].value = e.target.value;
        dispatch(valueChange(newState));
    };

    // remove element
    const handleRemove = e => {
        const newState = Array.from(constructor);
        newState.splice(index, 1);
        dispatch(removeElement(newState));
    };

    //check element
    const handleChecked = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].value = e.target.checked;
        dispatch(valueChange(newState));
    };

    // mark element as required
    const handleRequired = () => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].isRequired = !newState[index].isRequired;
        dispatch(setRequired(newState));
    };

    //handle ElementType
    const handleElementType = () => {
        switch (item.type) {
            case 'header':
                return (
                    <input
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                        name='formTitle'
                        // placeholder='Введите название формы'
                        className='form-element__input custom-form__form-title'
                    />
                );
            case 'title':
                return (
                    <input
                        onChange={handleValueChange}
                        name='title'
                        // placeholder='Введите заголовок'
                        className='form-element__input custom-form__title'
                        disabled={item.isDisabled}
                    />
                );
            case 'subtitle':
                return (
                    <textarea
                        onChange={handleValueChange}
                        name='formSubtitle'
                        // placeholder='Введите подзаголовок формы'
                        rows={3}
                        className='form-element__input custom-form__form-subtitle'
                        disabled={item.isDisabled}
                    />
                );
            case 'checkbox':
                return (
                    <label className='form-element__checkbox-label'>
                        <input
                            className='form-element__input form-element__input_type_checkbox'
                            type='checkbox'
                            checked={item.value}
                            onChange={handleChecked}
                            disabled={item.isDisabled}
                        />
                    </label>
                );
            case 'textArea':
                return (
                    <TextareaAutosize
                        className='form-element__input form-element__input_type_textarea'
                        value={item.value}
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                        minRows={5}
                    />
                );
            default:
                return (
                    <input
                        className='form-element__input'
                        type={item.type}
                        value={item.value}
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                    />
                );
        }
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className='form-element'>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        {item.isDisabled ? null : (
                            <>
                                <label className='form-element__required-title'>
                                    Объязательное
                                    <input
                                        className='form-element__required-checkbox'
                                        type='checkbox'
                                        onClick={handleRequired}
                                    />
                                </label>
                                <img
                                    className='form-element__remove-btn'
                                    alt=''
                                    onClick={handleRemove}
                                    src={removeButtonIcon}
                                ></img>
                            </>
                        )}
                        {handleElementType()}
                        <img
                            className='form-element__dragable-img'
                            src={dragableIcon}
                            alt=''
                        />
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default FormElement;
