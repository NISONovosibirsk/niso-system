import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { valueChange } from '../../store/actions/formActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IFormElement } from '../../interfaces';
import {
    FormElementCheckboxRequired,
    FormElementDragButton,
    FormElementLabelInput,
    FormElementRemoveButton,
} from '..';
import formElementTypeHandler from '../../middleware/formElementTypeHandler';

const FormElement = ({ item, id, index }: IFormElement) => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].placeholder =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        dispatch(valueChange(newState));
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    className='form-element'
                    id={index.toString()}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {item.isDisabled ? (
                        item.isRequired === undefined ? null : (
                            <FormElementLabelInput
                                value={item.label}
                                isDisabled={item.isDisabled}
                            />
                        )
                    ) : item.isRequired === undefined ? null : (
                        <>
                            <FormElementLabelInput
                                value={item.label}
                                isDisabled={item.isDisabled}
                            />
                            <FormElementCheckboxRequired
                                index={index}
                                isChecked={item.isRequired}
                            />
                        </>
                    )}
                    {item.isDisabled ? null : <FormElementRemoveButton />}
                    {formElementTypeHandler({
                        onValueChange: handleValueChange,
                        element: item,
                        isFinalForm: false,
                    })}
                    <FormElementDragButton />
                </div>
            )}
        </Draggable>
    );
};

export default FormElement;
