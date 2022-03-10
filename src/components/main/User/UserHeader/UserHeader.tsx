import { useNavigate } from 'react-router-dom';
import Searchbar from './HeaderSearchbar/HeaderSearchbar';
import './UserHeader.scss';

const ProfileHeader = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('profile');
    };

    return (
        <header className='user-header'>
            <Searchbar />
            <div className='user-header__avatar' onClick={handleClick}></div>
        </header>
    );
};

export default ProfileHeader;
