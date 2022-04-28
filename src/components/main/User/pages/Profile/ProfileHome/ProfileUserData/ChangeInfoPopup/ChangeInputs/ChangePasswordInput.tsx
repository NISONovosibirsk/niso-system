import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import { changeProfilePassword } from '../../../../../../../../../store/actions/userProfileActions';

const ChangePasswordInput = ({ form }) => {
    const { changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleInput = e => {
        const newState = { ...changeData.password };

        switch (e.target.name) {
            case 'currentPassword':
                newState.currentPassword = e.target.value;
                break;
            case 'newPassword':
                newState.newPassword = e.target.value;
                break;
            case 'confirmPassword':
                newState.confirmPassword = e.target.value;
                break;
        }

        dispatch(changeProfilePassword(newState));
    };

    const handleValue = field => {
        switch (field) {
            case 'currentPassword':
                return changeData.password.currentPassword;
            case 'newPassword':
                return changeData.password.newPassword;
            case 'confirmPassword':
                return changeData.password.confirmPassword;
            default:
                break;
        }
    };

    return (
        <label className='user-data-edit__item'>
            {form.title}
            <input
                type={form.type}
                name={form.field}
                value={handleValue(form.field)}
                className='user-data-edit__input'
                onChange={handleInput}
            />
        </label>
    );
};

export default ChangePasswordInput;
