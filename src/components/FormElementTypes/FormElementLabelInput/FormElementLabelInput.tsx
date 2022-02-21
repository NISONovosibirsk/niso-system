import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../store/actions/constructorActions';
import { IFormElementLabelInput } from '../interfaces';
import './FormElementLabelInput.scss';

const FormElementLabelInput = ({
    value,
    isDisabled,
}: IFormElementLabelInput) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const newState = [...addedElements];
        newState[e.target.parentNode.id].label = e.target.value;
        dispatch(updateAddedElements(newState));
    };

    return (
        <input
            className='form-element-label-input'
            value={value}
            onChange={handleValueChange}
            disabled={isDisabled}
        />
    );
};

export default FormElementLabelInput;
