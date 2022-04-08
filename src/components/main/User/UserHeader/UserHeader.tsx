import { useLocation, useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import Searchbar from './HeaderSearchbar/HeaderSearchbar';
import './UserHeader.scss';

const ProfileHeader = () => {
    const { profile } = useTypeSelector(state => state.userProfile);

    const navigate = useNavigate();
    const location = useLocation();

    const routes = [
        {
            path: 'constructor',
            title: 'Конструктор',
        },
        {
            path: 'home',
            title: 'Главная',
        },
        {
            path: 'profile',
            title: 'Личный профиль',
        },
    ];

    const handleHeaderTitle = routes =>
        routes.find(route => location.pathname.includes(route.path)).title;

    const handleClick = () => {
        navigate('profile');
    };

    return (
        <header className='user-header'>
            <h1 className='user-header__title'>{handleHeaderTitle(routes)}</h1>
            <Searchbar />
            <div
                className='user-header__avatar'
                onClick={handleClick}
                style={{ backgroundImage: `url(${profile.photo})` }}
            ></div>
        </header>
    );
};

export default ProfileHeader;
