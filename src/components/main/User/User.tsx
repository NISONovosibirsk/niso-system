import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import ProfileHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    HomeIcon,
    DutiesIcon,
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
            text: 'ОФС',
            icon: <OfsIcon />,
        },
        {
            path: 'reglaments',
            text: 'Регламенты',
            icon: <ConstructorIcon />,
        },
        {
            path: 'duties',
            text: 'Мои обязанности',
            icon: <DutiesIcon />,
        },
        {
            path: 'reports',
            text: 'Отчеты',
            icon: <ReportsIcon />,
        },
        {
            path: 'communications',
            text: 'Коммуникации',
            icon: <CommunicationsIcon />,
        },
        {
            path: 'staff',
            text: 'Сотрудники',
            icon: <StaffIcon />,
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
            text: 'ОФС',
            icon: <OfsIcon />,
        },
        {
            path: 'constructor',
            text: 'Конструктор',
            icon: <ConstructorIcon />,
        },
        {
            path: 'duties',
            text: 'Мои обязанности',
            icon: <DutiesIcon />,
        },
        {
            path: 'reports',
            text: 'Отчеты',
            icon: <ReportsIcon />,
        },
        {
            path: 'communications',
            text: 'Коммуникации',
            icon: <CommunicationsIcon />,
        },
        {
            path: 'staff',
            text: 'Сотрудники',
            icon: <StaffIcon />,
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
