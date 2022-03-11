import { useLocation, useNavigate } from 'react-router-dom';
import Searchbar from './HeaderSearchbar/HeaderSearchbar';
import './UserHeader.scss';

const ProfileHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHeaderTitle = () => {
        switch (location.pathname) {
            case '/user/constructor':
                return 'Конструктор';
            default:
                break;
        }
    };

    const handleClick = () => {
        navigate('profile');
    };

    return (
        <header className='user-header'>
            <h1 className='user-header__title'>{handleHeaderTitle()}</h1>
            <Searchbar />
            <div className='user-header__avatar' onClick={handleClick}></div>
        </header>
    );
};

export default ProfileHeader;
