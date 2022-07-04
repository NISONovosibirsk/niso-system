import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import ChangeInfoPopup from './ChangeInfoPopup/ChangeInfoPopup';
import ProfileUserDataItem from './ProfileUserDataItem/ProfileUserDataItem';
import './ProfileUserData.scss';
import StatusPopup from '../../../../../StatusPopup/StatusPopup';

const ProfileUserData = () => {
    const { profile, popup } = useTypeSelector(state => state.userProfile);
    const { statusCode } = useTypeSelector(state => state.statusPopup);

    return (
        <ul className='user-profile-data'>
            {profile.userData.map((dataItem, index) => (
                <ProfileUserDataItem
                    key={index}
                    dataItem={dataItem}
                    index={index}
                />
            ))}
            {statusCode ? (<StatusPopup/>) : (<ChangeInfoPopup type={popup.type}/>)}
            {/* <ChangeInfoPopup type={popup.type} /> */}
        </ul>
    );
};

export default ProfileUserData;
