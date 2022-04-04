import { useDispatch } from 'react-redux';
import {
    EditIcon,
    KeyIcon,
    MailIcon,
    PhoneIcon,
} from '../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../store/actions/userProfileActions';
import ChangePasswordPopup from './ChangePasswordPopup/ChangePasswordPopup';
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
            <li className='user-profile-info-contacts__item user-phone'>
                <PhoneIcon />
                <p>{info.phone}</p>
                <EditIcon className='edit-button' />
            </li>
            <li className='user-profile-info-contacts__item user-email'>
                <MailIcon />
                <p>{info.email}</p>
                <EditIcon className='edit-button' />
            </li>
            <li
                className='user-profile-info-contacts__item user-password edit-button'
                onClick={handlePopup}
            >
                <KeyIcon />
                <p>Изменить пароль</p>
            </li>
            <ChangePasswordPopup />
        </ul>
    );
};

export default ProfileInfoContacts;
