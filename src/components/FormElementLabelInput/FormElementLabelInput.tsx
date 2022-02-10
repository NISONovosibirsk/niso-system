import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { lableChange } from '../../store/actions/formActions';
import './FormElementLabelInput.scss';

const FormElementLabelInput = ({ value, isDisabled }) => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleValueChange = e => {
        const newState: Array<any> = Array.from(constructor);
        newState[e.target.parentNode.id].title = e.target.value;
        dispatch(lableChange(newState));
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
