import { useDispatch } from 'react-redux';
import { EditIcon } from '../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updatePopup, updateProfileInfo } from '../../../../../../../store/actions/userProfileActions';
import './ProfileInfoHeader.scss';

const ProfileInfoHeader = () => {
    const dispatch = useDispatch();
    const { profile, popup } = useTypeSelector(state => state.userProfile);

    const handlePhoto = e => {
        const newInfo = { ...profile };

        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            newInfo.photo = URL.createObjectURL(img);

            dispatch(updateProfileInfo(newInfo));
        }
    };

    const handleEdit = e => {
        dispatch(updatePopup({isOpen: true, type: 'name', title: 'Изменение ФИО'}))
    };

    return (
        <div className='user-profile-info-header'>
            <div
                className='user-profile-info-header__photo'
                style={{ backgroundImage: `url(${profile.photo})` }}
            >
                <label className='user-profile-info-header__select-photo'>
                    <input type='file' onChange={handlePhoto} />
                </label>
            </div>

            <ul className='user-profile-info-header__list'>
                <li className='user-profile-info-header__name bold-title'>
                    {profile.name}
                    <EditIcon className='edit-button' onClick={handleEdit}/>
                </li>
                <li className='user-profile-info-header__position regular-subtitle'>
                    {profile.position}
                </li>
            </ul>
        </div>
    );
};

export default ProfileInfoHeader;
