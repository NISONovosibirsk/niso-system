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
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <ReportsIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры (мониторинги)',
            icon: <ConstructorIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур (мониторингов)',
            icon: <ReportsIcon />,
        },
        {
            path: 'ofs',
            text: 'Профессиональная диагностика',
            icon: <OfsIcon />,
        },
        {
            path: 'ofs',
            text: 'Результаты профессиональной диагностики',
            icon: <OfsIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы (рекомендации, сборники, памятки)',
            icon: <HandbookIcon />,
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
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <ReportsIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры (мониторинги)',
            icon: <ConstructorIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур (мониторингов)',
            icon: <ReportsIcon />,
        },
        {
            path: 'ofs',
            text: 'Профессиональная диагностика',
            icon: <OfsIcon />,
        },
        {
            path: 'ofs',
            text: 'Результаты профессиональной диагностики',
            icon: <OfsIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы (рекомендации, сборники, памятки)',
            icon: <HandbookIcon />,
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
