import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import ChangeInfoPopup from './ChangeInfoPopup/ChangeInfoPopup';
import ProfileUserDataItem from './ProfileUserDataItem/ProfileUserDataItem';
import './ProfileUserData.scss';

const ProfileUserData = () => {
    const { profile, popup } = useTypeSelector(state => state.userProfile);

    return (
        <ul className='user-profile-data'>
            {profile.userData.map((dataItem, index) => (
                <ProfileUserDataItem
                    key={index}
                    dataItem={dataItem}
                    index={index}
                />
            ))}
            <ChangeInfoPopup type={popup.type}/>
        </ul>
    );
};

export default ProfileUserData;
