import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../../store/actions/formConstructorActions';
import { IConstructorFormElementLabelInput } from '../interfaces';
import './ConstructorFormElementLabelInput.scss';

const ConstructorFormElementLabelInput = ({
    value,
    isDisabled,
}: IConstructorFormElementLabelInput) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const newState = [...addedElements];
        newState[e.target.parentNode.id].label = e.target.value;
        dispatch(updateAddedElements(newState));
    };

    return (
        <input
            className='constructor-form-element-label-input'
            value={value}
            onChange={handleValueChange}
            disabled={isDisabled}
        />
    );
};

export default ConstructorFormElementLabelInput;
