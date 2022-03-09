import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../../store/actions/formConstructorActions';
import { IConstructorFormElementCheckboxRequired } from '../interfaces';
import './ConstructorFormElementCheckboxRequired.scss';

const ConstructorFormElementCheckboxRequired = ({
    index,
    isChecked,
}: IConstructorFormElementCheckboxRequired) => {
    const { addedElements } = useTypeSelector(state => state.formConstructor);

    const dispatch = useDispatch();

    const handleChange = () => {
        const newState = [...addedElements];
        newState[index].isRequired = !newState[index].isRequired;
        dispatch(updateAddedElements(newState));
    };

    return (
        <label className='constructor-form-element-checkbox-required'>
            Объязательное
            <input
                className='constructor-form-element-checkbox-required__input'
                type='checkbox'
                onChange={handleChange}
                checked={isChecked}
            />
            <div className='constructor-form-element-checkbox-required__checkbox'></div>
        </label>
    );
};

export default ConstructorFormElementCheckboxRequired;
