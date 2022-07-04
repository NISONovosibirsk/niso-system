import { useDispatch } from 'react-redux';
import {
    EditIcon,
    KeyIcon,
    MailIcon,
    PhoneIcon,
} from '../../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../../store/actions/userProfileActions';
import './ProfileUserDataItem.scss';

const ProfileUserDataItem = ({ dataItem, index }) => {
    const { popup } = useTypeSelector(state => state.userProfile);
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

    // open editing popup
    const handleEdit = () => {
        const newState = { ...popup };
        newState.isOpen = true;
        newState.type = dataItem.type;
        switch (newState.type) {
            case 'phone':
                newState.title = 'Изменение номера телефона'
                break;
            case 'email':
                newState.title = 'Изменение адреса электронной почты';
                break;
            default:
                break;
        }
        dispatch(updatePopup(newState));
    };

    return (
        <li className='user-profile-data__item user-phone'>
            {dataItem.type === 'password' ? (
                <>
                    {handleIcon(dataItem.type)}
                    <p
                        className='edit-button user-password'
                        onClick={handleEdit}
                    >
                        Изменить пароль
                    </p>
                </>
            ) : (
                <>
                    {handleIcon(dataItem.type)}
                    <p>{dataItem.value}</p>
                    <EditIcon className='edit-button' onClick={handleEdit} />
                </>
            )}
        </li>
    );
};

export default ProfileUserDataItem;
