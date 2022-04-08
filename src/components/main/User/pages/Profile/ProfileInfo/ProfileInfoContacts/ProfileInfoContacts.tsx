import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import ChangeInfoPopup from './ChangeInfoPopup/ChangeInfoPopup';
import ProfileContactsItem from './ProfileContactsItem/ProfileContactsItem';
import './ProfileInfoContacts.scss';

const ProfileInfoContacts = () => {
    const { profile, popup } = useTypeSelector(state => state.userProfile);

    return (
        <ul className='user-profile-info-contacts'>
            {profile.userData.map((dataItem, index) => (
                <ProfileContactsItem
                    key={index}
                    dataItem={dataItem}
                    index={index}
                />
            ))}
            <ChangeInfoPopup type={popup.type}/>
        </ul>
    );
};

export default ProfileInfoContacts;
