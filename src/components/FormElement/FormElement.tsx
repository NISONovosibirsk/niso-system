import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateConstructor } from '../../store/actions/formActions';
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
        const { type, id, checked, value } = e.target;

        const newState: Array<any> = Array.from(constructor);
      
        switch (type) {
            case 'radio':
                const newRadiolist: Array<any> = Array.from(
                    newState[index].radiolist
                );

                newRadiolist.forEach(radio => (radio.isChecked = false));
                newRadiolist[id].isChecked = true;
                newState[index].radiolist = newRadiolist;
                break;

            case 'checkbox':
                newState[index].placeholder = checked;
                break;

            default:
                newState[index].placeholder = value;
                break;
        }
        dispatch(updateConstructor(newState));
    };

    const handleRemoveElement = e => {
        const newState = Array.from(constructor);
        newState.splice(e.target.parentNode.id, 1);
        dispatch(updateConstructor(newState));
    };

    const handleRenderLabelInput = () => {
        switch (item.type) {
            case 'header':
                break;
            case 'title':
                break;
            case 'subtitle':
                break;
            default:
                return (
                    <FormElementLabelInput
                        value={item.label}
                        isDisabled={item.isDisabled}
                    />
                );
        }
    };

    const handleRenderRemoveButton = () => {
        switch (item.type) {
            case 'header':
                break;
            case 'title':
                break;
            default:
                return (
                    <FormElementRemoveButton onClick={handleRemoveElement} />
                );
        }
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
                    {handleRenderLabelInput()}
                    {!item.isDisabled && item.isRequired !== undefined && (
                        <FormElementCheckboxRequired
                            index={index}
                            isChecked={item.isRequired}
                        />
                    )}
                    {!item.isDisabled && handleRenderRemoveButton()}
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
