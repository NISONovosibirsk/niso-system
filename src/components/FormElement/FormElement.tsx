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
import {
    FormElementCheckbox,
    FormElementInput,
    FormElementRange,
    FormElementTextarea,
} from '..';

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

    const handleChangeRangeMinimum = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].min = e.target.value;
        dispatch(valueChange(newState));
    };

    const handleChangeRangeMaximum = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].max = e.target.value;
        dispatch(valueChange(newState));
    };

    //handle ElementType
    const handleElementType = () => {
        switch (item.type) {
            case 'header':
                return (
                    <input
                        className='form-element__input custom-form__form-title'
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                        placeholder={`${
                            item.isDisabled ? '' : 'Введите название формы'
                        }`}
                    />
                );
            case 'title':
                return (
                    <input
                        className='form-element__input custom-form__title'
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                        placeholder={`${
                            item.isDisabled ? '' : 'Введите заголовок'
                        }`}
                    />
                );
            case 'subtitle':
                return (
                    <TextareaAutosize
                        className='form-element__input custom-form__form-subtitle'
                        value={item.value}
                        onChange={handleValueChange}
                        disabled={item.isDisabled}
                        minRows={1}
                        placeholder={`${
                            item.isDisabled ? '' : 'Введите подзаголовок формы'
                        }`}
                    />
                );
            case 'range':
                return (
                    <FormElementRange
                        valueMaximum={item.max}
                        valueMinimum={item.min}
                        value={item.value}
                        onMaximumChange={handleChangeRangeMaximum}
                        onMinimumChange={handleChangeRangeMinimum}
                        onValueChange={handleValueChange}
                        isDisabled={item.isDisabled}
                        isFinalForm={false}
                    />
                );
            case 'checkbox':
                return (
                    <FormElementCheckbox
                        isChecked={item.value}
                        onChange={handleChecked}
                        isDisabled={item.isDisabled}
                    />
                );
            case 'textArea':
                return (
                    <FormElementTextarea
                        value={item.value}
                        onChange={handleValueChange}
                        isDisabled={item.isDisabled}
                    />
                );
            default:
                return (
                    <FormElementInput
                        value={item.value}
                        onChange={handleValueChange}
                        isDisabled={item.isDisabled}
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
                        {item.isDisabled ? (
                            <input
                                className='form-element__input form-element__input_type_label'
                                value={item.title}
                                onChange={handleTitleChange}
                                disabled={item.isDisabled}
                            />
                        ) : item.isRequired === undefined ? null : (
                            <>
                                <input
                                    className='form-element__input form-element__input_type_label'
                                    value={item.title}
                                    onChange={handleTitleChange}
                                    disabled={item.isDisabled}
                                />
                                <label className='form-element__required-title'>
                                    Объязательное
                                    <input
                                        className='form-element__required-checkbox'
                                        type='checkbox'
                                        onChange={handleRequired}
                                        checked={item.isRequired}
                                    />
                                    <div className='form-element__required-custom-checkbox'></div>
                                </label>
                            </>
                        )}
                        {item.isDisabled ? null : (
                            <img
                                className='form-element__remove-btn'
                                alt=''
                                onClick={handleRemove}
                                src={removeButtonIcon}
                            ></img>
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
