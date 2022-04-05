import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updateProfileInfo } from '../../../../../../../../store/actions/userProfileActions';
import './ProfileEditForm.scss';

const ProfileEditForm = ({ index }) => {
    const { info } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    // dispatching new value for contact from input
    const handleType = e => {
        const newState = { ...info };
        newState.contacts[index].value = e.target.value;
        dispatch(updateProfileInfo(newState));
    };

    // hide editing form by submit
    const handleSubmit = e => {
        e.preventDefault();
        const newState = { ...info };
        newState.contacts[index].isEdit = false;
        dispatch(updateProfileInfo(newState));
    };

    return (
        <form
            className='user-profile-info-contacts_edit'
            onSubmit={handleSubmit}
        >
            <input
                className='user-profile-info-contacts_edit__input'
                type='text'
                defaultValue={info.contacts[index].value}
                onChange={handleType}
            />
        </form>
    );
};

export default ProfileEditForm;
