import { useDispatch } from 'react-redux';
import { useInput } from '../../../../../../../../../hooks/useInput';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import { updateChangeData } from '../../../../../../../../../store/actions/userProfileActions';

const ChangeContactInput = ({ form }) => {
    const { profile, changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleDefault = () => {
        let value = '';

        profile.userData.find(item => {
            if (item.type === form.field) {
                value = item.value;
            }
        });
        return value;
    };

    const handleInput = e => {
        const newState = { ...changeData };

        switch (e.target.name) {
            case 'phone':
                newState.phone = e.target.value;

                break;
            case 'email':
                newState.email = e.target.value;
                break;
            default:
                break;
        }
        dispatch(updateChangeData(newState));
    };

    const phoneInput = useInput('', { isEmpty: true, minLength: 4 });

    return (
        <label className='user-data-edit__item'>
            {form.title}
            {changeData.inputs.isDirty && changeData.validation.isEmpty && (
                <p style={{ color: 'red' }}>Поле не может быть пустым</p>
            )}
            {changeData.inputs.isDirty && changeData.validation.minLength && (
                <p style={{ color: 'red' }}>Некорректная длина номера</p>
            )}
            <input
                name={form.field}
                defaultValue={handleDefault()}
                className='user-data-edit__input'
                // onChange={handleInput}
                onChange={e => phoneInput.onChange(e)}
                onBlur={e => phoneInput.onBlur(e)}
                value={changeData.inputs.value}
            />
        </label>
    );
};

export default ChangeContactInput;
