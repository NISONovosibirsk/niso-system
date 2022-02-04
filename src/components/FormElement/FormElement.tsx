import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import {
    lableChange,
    removeElement,
    valueChange,
} from '../../store/actions/formActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IFormElement } from '../../interfaces';

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

    const handleChecked = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].value = e.target.checked;
        dispatch(valueChange(newState));
    };

    //handle ElementType
    const handleElementType = () => {
        switch (item.type) {
            case 'checkbox':
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <label className='form-element__checkbox-label'>
                            <input
                                className='form-element__input form-element__input_type_checkbox'
                                type='checkbox'
                                checked={item.value}
                                onChange={handleChecked}
                                disabled={item.isDisabled}
                            />
                        </label>
                    </>
                );
            case 'header':
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <input
                            onChange={handleValueChange}
                            disabled={item.isDisabled}
                            name='formTitle'
                            placeholder='Введите название формы'
                            className='form-element__input custom-form__form-title'
                        />
                    </>
                );
            case 'title':
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <input
                            onChange={handleValueChange}
                            name='title'
                            placeholder='Введите заголовок'
                            className='form-element__input custom-form__title'
                            disabled={item.isDisabled}
                        />
                    </>
                );
            case 'subtitle':
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <textarea
                            onChange={handleValueChange}
                            name='formSubtitle'
                            placeholder='Введите подзаголовок формы'
                            rows={3}
                            className='form-element__input custom-form__form-subtitle'
                            disabled={item.isDisabled}
                        />
                    </>
                );
            case 'textArea':
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <textarea
                            onChange={handleValueChange}
                            name='formSubtitle'
                            placeholder='Поле текста'
                            rows={10}
                            // className='form-element__input'
                            disabled={item.isDisabled}
                        />
                    </>
                );
            default:
                return (
                    <>
                        <input
                            className='form-element__input form-element__input_type_label'
                            value={item.title}
                            onChange={handleTitleChange}
                            disabled={item.isDisabled}
                        />
                        <input
                            className='form-element__input'
                            type={item.type}
                            value={item.value}
                            onChange={handleValueChange}
                            disabled={item.isDisabled}
                        />
                    </>
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
                        {item.isDisabled ? null : (
                            <div
                                className='form-element__remove-btn'
                                onClick={handleRemove}
                            ></div>
                        )}
                        {handleElementType()}
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default FormElement;
