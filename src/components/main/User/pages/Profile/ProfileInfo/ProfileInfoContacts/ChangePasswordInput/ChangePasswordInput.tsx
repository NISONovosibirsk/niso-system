import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../../store/actions/userProfileActions';
import './ChangePasswordInput.scss';

const ChangePasswordInput = ({ form }) => {
    const { popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleInput = e => {
        const newState = { ...popup };

        switch (e.target.name) {
            case 'currentPassword':
                newState.currentPassword = e.target.value;
                dispatch(updatePopup(newState));
                break;
            case 'newPassword':
                newState.newPassword = e.target.value;
                dispatch(updatePopup(newState));
                break;
            case 'confirmPassword':
                newState.confirmPassword = e.target.value;
                dispatch(updatePopup(newState));
                break;
            default:
                break;
        }
    };

    const handleValue = field => {
        switch (field) {
            case 'currentPassword':
                return popup.currentPassword;
            case 'newPassword':
                return popup.newPassword;
            case 'confirmPassword':
                return popup.confirmPassword;
            default:
                break;
        }
    };

    return (
        <label className='user-profile-change-password__item'>
            {form.title}
            <input
                type={form.type}
                name={form.field}
                value={handleValue(form.field)}
                className='user-profile-change-password__input'
                onChange={handleInput}
            />
        </label>
    );
};

export default ChangePasswordInput;
