import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateConstructor } from '../../../store/actions/formActions';
import { IFormElementLabelInput } from '../interfaces';
import './FormElementLabelInput.scss';

const FormElementLabelInput = ({
    value,
    isDisabled,
}: IFormElementLabelInput) => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const newState = [...constructor];
        newState[e.target.parentNode.id].label = e.target.value;
        dispatch(updateConstructor(newState));
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
