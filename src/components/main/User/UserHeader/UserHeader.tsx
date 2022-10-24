import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateLoginStatus } from '../../../../store/actions/userStatusActions';
import Checkbox from '../../../support/Checkbox/Checkbox';
import Searchbar from './HeaderSearchbar/HeaderSearchbar';
import './UserHeader.scss';

const UserHeader = () => {
    const { profile } = useTypeSelector(state => state.userProfile);

    const navigate = useNavigate();
    const location = useLocation();

    const routes = [
        {
            path: 'constructor',
            title: 'Оценочные процедуры',
        },
        {
            path: 'home',
            title: 'Главная',
        },
        {
            path: 'profile',
            title: 'Личный профиль',
        },
        {
            path: 'handbook',
            title: 'Методические материалы',
        },
        {
            path: 'listEI',
            title: 'Список образовательных учреждений',
        },
        {
            path: 'organizer',
            title: 'Органайзер руководителя',
        },
        {
            path: 'riskFactor',
            title: 'Личный кабинет психолога',
        },
    ];

    const handleHeaderTitle = routes =>
        routes.find(route => location.pathname.includes(route.path)).title;

    const handleClick = () => {
        navigate('profile');
    };

    // demo switch logic
    const { isLogged } = useTypeSelector(state => state.userStatus);
    const dispatch = useDispatch();
    const onSwitch = () => {
        dispatch(updateLoginStatus(!isLogged));
    };

    return (
        <header className='user-header'>
            <div className='user-header__wrapper'>
                <h1 className='user-header__title'>
                    {handleHeaderTitle(routes)}
                </h1>
                <Checkbox
                    title={'Пользователь авторизован'}
                    isChecked={isLogged}
                    onChange={onSwitch}
                />
            </div>
            <Searchbar />
            <div
                className='user-header__avatar'
                onClick={handleClick}
                style={{ backgroundImage: `url(${profile.photo})` }}
            ></div>
        </header>
    );
};

export default UserHeader;
