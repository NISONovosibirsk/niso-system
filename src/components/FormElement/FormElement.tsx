import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { updateAddedElements } from '../../store/actions/constructorActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IFormElement } from '../../interfaces';
import {
    FormElementCheckboxRequired,
    FormElementDragButton,
    FormElementLabelInput,
    RemoveButton,
} from '..';
import formElementTypeHandler from '../../middleware/formElementTypeHandler';

const FormElement = ({ element, id, index }: IFormElement) => {
    const { addedElements } = useTypeSelector(state => state.constructor);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const { type, id, checked, value } = e.target;
        const newState = [...addedElements];

        switch (type) {
            case 'radio':
                const newRadiolist = [...newState[index].radiolist];

                newRadiolist.forEach(radio => (radio.isChecked = false));
                newRadiolist[id].isChecked = true;
                newState[index].radiolist = newRadiolist;
                break;

            case 'checkbox':
                newState[index].value = checked;
                break;

            default:
                newState[index].placeholder = value;
                break;
        }
        dispatch(updateAddedElements(newState));
    };

    const handleRemoveElement = e => {
        const newState = [...addedElements];
        newState.splice(e.target.parentNode.id, 1);
        dispatch(updateAddedElements(newState));
    };

    const handleRenderLabelInput = () => {
        switch (element.type) {
            case 'header':
                break;
            case 'title':
                break;
            case 'subtitle':
                break;
            default:
                return (
                    <FormElementLabelInput
                        value={element.label}
                        isDisabled={element.isDisabled}
                    />
                );
        }
    };

    const handleRenderRemoveButton = () => {
        switch (element.type) {
            case 'header':
                break;
            case 'title':
                break;
            default:
                return <RemoveButton onClick={handleRemoveElement} />;
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
                    {!element.isDisabled &&
                        element.isRequired !== undefined && (
                            <FormElementCheckboxRequired
                                index={index}
                                isChecked={element.isRequired}
                            />
                        )}
                    {!element.isDisabled && handleRenderRemoveButton()}
                    {formElementTypeHandler({
                        onValueChange: handleValueChange,
                        element,
                        isFinalForm: false,
                    })}
                    <FormElementDragButton />
                </div>
            )}
        </Draggable>
    );
};

export default FormElement;
