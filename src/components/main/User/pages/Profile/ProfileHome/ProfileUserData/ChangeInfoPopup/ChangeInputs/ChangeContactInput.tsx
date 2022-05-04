import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../../../../../../../../../hooks/useInput';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import {
    setFormValid,
    updateValidationInput,
} from '../../../../../../../../../store/actions/userProfileActions';

const ChangeContactInput = ({ form }) => {
    const { profile, validation } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        const input = { ...validation.input };

        profile.userData.find(item => {
            if (item.type === form.field) {
                input.value = item.value;
            }
        });

        dispatch(updateValidationInput(input));
    }, []);

    const phoneInput = useInput({ isEmpty: true, minLength: 4, maxLength: 30 });

    return (
        <label className='user-data-edit__item'>
            {/* {validation.input.isDirty && validation.cases.isEmpty && (
                <p style={{ color: 'red' }}>Поле не может быть пустым</p>
            )} */}
            {/* {validation.input.isDirty && validation.cases.minLength && (
                <p style={{ color: 'red' }}>Некорректная длина номера</p>
            )}
            {validation.input.isDirty && validation.cases.maxLength && (
                <p style={{ color: 'red' }}>Номер слишком длинный</p>
            )} */}
            <input
                name={form.field}
                value={validation.input.value}
                className='user-data-edit__input'
                onChange={e => phoneInput.onChange(e)}
                onBlur={e => phoneInput.onBlur(e)}
            />
            {/* {validation.cases.isEmpty && <p>Empty</p>} */}
        </label>
    );
};

export default ChangeContactInput;
