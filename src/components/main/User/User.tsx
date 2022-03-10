import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import ProfileHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    HomeIcon,
    DutiesIcon,
    OfsIcon,
    CommunicationsIcon,
    ReglamentsIcon,
    StaffIcon,
    ReportsIcon,
} from '../../../assets';

const User = () => {
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
            icon: <ReglamentsIcon />,
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
        <section className='user'>
            <UserSidebar sidebarListData={memberSidebarListData} />
            <div className='user__field'>
                <ProfileHeader />
                <div className='user__content'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default User;
