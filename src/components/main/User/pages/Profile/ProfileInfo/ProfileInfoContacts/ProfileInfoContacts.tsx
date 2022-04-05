import { useDispatch } from 'react-redux';
import { KeyIcon } from '../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../store/actions/userProfileActions';
import ChangePasswordPopup from './ChangePasswordPopup/ChangePasswordPopup';
import ProfileContactsItem from './ProfileContactsItem/ProfileContactsItem';
import './ProfileInfoContacts.scss';

const ProfileInfoContacts = () => {
    const { info, popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handlePopup = () => {
        const newState = { ...popup };
        newState.isOpen = true;
        dispatch(updatePopup(newState));
    };

    return (
        <ul className='user-profile-info-contacts'>
            {info.contacts.map((contact, index) => (
                <ProfileContactsItem
                    key={index}
                    contact={contact}
                    index={index}
                />
            ))}
            <li
                className='user-profile-info-contacts__item user-password'
            >
                <KeyIcon />
                <p className='edit-button' onClick={handlePopup}>Изменить пароль</p>
            </li>
            <ChangePasswordPopup />
        </ul>
    );
};

export default ProfileInfoContacts;
