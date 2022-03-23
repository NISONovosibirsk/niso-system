//styles
import './ConstructorFormElement.scss';
//modules
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
//redux
import {
    setIsValid,
    updateAddedElements,
} from '../../../../store/actions/formConstructorActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
//interfaces
import { IConstructorFormElement } from '../interfaces';
//middlewares
import constructorFormElementTypeHandler from '../../../../middleware/constructorFormElementTypeHandler';
//components
import { CrossButton } from '../../../support';
import {
    ConstructorFormElementCheckboxRequired,
    ConstructorFormElementLabelInput,
} from '..';

const ConstructorFormElement = ({
    element,
    id,
    index,
}: IConstructorFormElement) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
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
        dispatch(setIsValid(e.target.closest('form').checkValidity()));
    };

    const handleRemoveElement = e => {
        const newState = [...addedElements];
        newState.splice(e.target.parentNode.id, 1);
        dispatch(updateAddedElements(newState));
    };

    const handleRenderLabelInput = () => {
        switch (element.type) {
            case 'header':
            case 'title':
            case 'subtitle':
                break;
            default:
                return (
                    <ConstructorFormElementLabelInput
                        value={element.label}
                        isDisabled={element.isDisabled}
                    />
                );
        }
    };

    const handleRenderRemoveButton = () => {
        switch (element.type) {
            case 'header':
            case 'title':
                break;
            default:
                return <CrossButton onClick={handleRemoveElement} />;
        }
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    className='constructor-form-element'
                    id={index.toString()}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {handleRenderLabelInput()}
                    {!element.isDisabled &&
                        element.isRequired !== undefined && (
                            <ConstructorFormElementCheckboxRequired
                                index={index}
                                isChecked={element.isRequired}
                            />
                        )}
                    {!element.isDisabled && handleRenderRemoveButton()}
                    {constructorFormElementTypeHandler({
                        onValueChange: handleValueChange,
                        element,
                        isFinalForm: false,
                    })}
                </div>
            )}
        </Draggable>
    );
};

export default ConstructorFormElement;
