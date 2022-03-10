import { useNavigate } from 'react-router-dom';
import Searchbar from '../SearchBar/Searchbar';
import './ProfileHeader.scss';

const ProfileHeader = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('user')
    }

    return (
        <div className='profile-header'>
            <Searchbar/>
            <div className='profile-header__user' onClick={handleClick}></div>
        </div>
    );
}

export default ProfileHeader;