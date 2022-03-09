import Searchbar from '../SearchBar/Searchbar';
import './ProfileHeader.scss';

const ProfileHeader = () => {

    return (
        <div className='profile-header'>
            <Searchbar/>
            <div className='profile-header__user'></div>
        </div>
    );
}

export default ProfileHeader;