import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import ProfileHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    HomeIcon,
    HandbookIcon,
    OfsIcon,
    CommunicationsIcon,
    ConstructorIcon,
    StaffIcon,
    ReportsIcon,
} from '../../../assets';

const User = () => {
    const isAdmin = true;

    const memberSidebarListData = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'ofs',
            text: 'Общая информация для пользователей',
            icon: <OfsIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры',
            icon: <ConstructorIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы',
            icon: <HandbookIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур',
            icon: <ReportsIcon />,
        },
        {
            path: 'regulators',
            text: 'Нормативные регуляторы',
            icon: <ReportsIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <ReportsIcon />,
        },
        {
            path: 'files',
            text: 'Файлообменник',
            icon: <ReportsIcon />,
        },
        {
            path: 'communications',
            text: 'Вопрос/Ответ',
            icon: <CommunicationsIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <ReportsIcon />,
        },
    ];

    const adminSidebarListData = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'ofs',
            text: 'Общая информация для пользователей',
            icon: <OfsIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры',
            icon: <ConstructorIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы',
            icon: <HandbookIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур',
            icon: <ReportsIcon />,
        },
        {
            path: 'regulators',
            text: 'Нормативные регуляторы',
            icon: <ReportsIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <ReportsIcon />,
        },
        {
            path: 'files',
            text: 'Файлообменник',
            icon: <ReportsIcon />,
        },
        {
            path: 'communications',
            text: 'Вопрос/Ответ',
            icon: <CommunicationsIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <ReportsIcon />,
        },
    ];

    return (
        <div className='user'>
            <UserSidebar
                sidebarListData={
                    isAdmin ? adminSidebarListData : memberSidebarListData
                }
            />
            <ProfileHeader />
            <Outlet />
        </div>
    );
};

export default User;
