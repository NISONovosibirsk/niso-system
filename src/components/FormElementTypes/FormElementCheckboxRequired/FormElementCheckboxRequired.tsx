import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../store/actions/constructorActions';
import { IFormElementCheckboxRequired } from '../interfaces';
import './FormElementCheckboxRequired.scss';

const FormElementCheckboxRequired = ({
    index,
    isChecked,
}: IFormElementCheckboxRequired) => {
    const { addedElements } = useTypeSelector(state => state.constructor);

    const dispatch = useDispatch();

    const handleChange = () => {
        const newState = [...addedElements];
        newState[index].isRequired = !newState[index].isRequired;
        dispatch(updateAddedElements(newState));
    };

    return (
        <label className='form-element-checkbox-required'>
            Объязательное
            <input
                className='form-element-checkbox-required__input'
                type='checkbox'
                onChange={handleChange}
                checked={isChecked}
            />
            <div className='form-element-checkbox-required__checkbox'></div>
        </label>
    );
};

export default FormElementCheckboxRequired;
