import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { setRequired } from '../../../store/actions/formActions';
import { IFormElementCheckboxRequired } from '../interfaces';
import './FormElementCheckboxRequired.scss';

const FormElementCheckboxRequired = ({
    index,
    isChecked,
}: IFormElementCheckboxRequired) => {
    const { constructor } = useTypeSelector(state => state.form);

    const dispatch = useDispatch();

    const handleChange = () => {
        const newState: Array<any> = Array.from(constructor);
        newState[index].isRequired = !newState[index].isRequired;
        dispatch(setRequired(newState));
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
