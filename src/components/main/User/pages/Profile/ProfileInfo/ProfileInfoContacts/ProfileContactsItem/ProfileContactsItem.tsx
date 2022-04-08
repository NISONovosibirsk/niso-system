import { useDispatch } from 'react-redux';
import {
    EditIcon,
    KeyIcon,
    MailIcon,
    PhoneIcon,
} from '../../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    updatePopup,
    updateProfileInfo,
} from '../../../../../../../../store/actions/userProfileActions';
import './ProfileContactsItem.scss';

const ProfileContactsItem = ({ dataItem, index }) => {
    const { profile, popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    // choose an icon from an item type
    const handleIcon = type => {
        switch (type) {
            case 'phone':
                return <PhoneIcon />;
            case 'email':
                return <MailIcon />;
            case 'password':
                return <KeyIcon />;
            default:
                break;
        }
    };

    // mark an item as editing
    const handleEdit = () => {
        // const newState = { ...info };
        // newState.contacts[index].isEdit = true;
        // dispatch(updateProfileInfo(newState));

        const newState = { ...popup };
        newState.isOpen = true;
        newState.type = dataItem.type;
        dispatch(updatePopup(newState));
    };

    return (
        <li className='user-profile-info-contacts__item user-phone'>
            {/* {handleIcon(contact.type)}
            <p>{contact.value}</p>
            <EditIcon
                className='edit-button'
                onClick={() => handleEdit(index)}
            /> */}
            {dataItem.type === 'password' ? (
                <>
                    {handleIcon(dataItem.type)}
                    <p className='edit-button user-password' onClick={handleEdit}>Изменить пароль</p>
                </>
            ) : (
                <>
                    {handleIcon(dataItem.type)}
                    <p>{dataItem.value}</p>
                    <EditIcon className='edit-button' onClick={handleEdit}/>
                </>
            )}
        </li>
    );
};

export default ProfileContactsItem;
