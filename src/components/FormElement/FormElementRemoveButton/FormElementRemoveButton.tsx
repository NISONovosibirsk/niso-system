import { useDispatch } from 'react-redux';
import { removeButtonIcon } from '../../../assets';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { removeElement } from '../../../store/actions/formActions';
import './FormElementRemoveButton.scss';

const FormElementRemoveButton = () => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleRemoveElement = e => {
        const newState = Array.from(constructor);
        newState.splice(e.target.parentNode.id, 1);
        dispatch(removeElement(newState));
    };

    return (
        <img
            className='form-element-remove-button'
            alt=''
            onClick={handleRemoveElement}
            src={removeButtonIcon}
        ></img>
    );
};

export default FormElementRemoveButton;
