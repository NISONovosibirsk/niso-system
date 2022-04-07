import { useDispatch } from 'react-redux';
import { EditIcon, MailIcon, PhoneIcon } from '../../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updateProfileInfo } from '../../../../../../../../store/actions/userProfileActions';
import './ProfileContactsItem.scss';

const ProfileContactsItem = ({ contact, index }) => {
    const { info } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    // choose an icon from an item type
    const handleIcon = type => {
        switch (type) {
            case 'phone':
                return <PhoneIcon />;
            case 'email':
                return <MailIcon />;
            default:
                break;
        }
    };

    // mark an item as editing
    const handleEdit = index => {
        const newState = { ...info };
        newState.contacts[index].isEdit = true;
        dispatch(updateProfileInfo(newState));
    };

    return (
        <li className='user-profile-info-contacts__item user-phone'>
            {handleIcon(contact.type)}
            <p>{contact.value}</p>
            <EditIcon
                className='edit-button'
                onClick={() => handleEdit(index)}
            />
        </li>
    );
};

export default ProfileContactsItem;
