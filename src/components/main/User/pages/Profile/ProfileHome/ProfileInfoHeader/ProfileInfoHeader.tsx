import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updateProfileInfo } from '../../../../../../../store/actions/userProfileActions';
import './ProfileInfoHeader.scss';

const ProfileInfoHeader = () => {
    const dispatch = useDispatch();
    const { profile } = useTypeSelector(state => state.userProfile);

    const handlePhoto = e => {
        const newInfo = { ...profile };

        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            newInfo.photo = URL.createObjectURL(img);

            dispatch(updateProfileInfo(newInfo));
        }
    };

    return (
        <div className='user-profile-info-header'>
            <div className='user-profile-info-header__photo' style={{backgroundImage: `url(${profile.photo})`}}>
                <label className='user-profile-info-header__select-photo'>
                    <input type='file' onChange={handlePhoto} />
                </label>
            </div>

            <ul className='user-profile-info-header__list'>
                <li className='user-profile-info-header__name bold-title'>
                    {profile.name}
                </li>
                <li className='user-profile-info-header__position regular-subtitle'>
                    {profile.position}
                </li>
            </ul>
        </div>
    );
};

export default ProfileInfoHeader;
