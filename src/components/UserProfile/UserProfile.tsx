import Sidebar from './Sidebar/Sidebar';
import './UserProfile.scss';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { Outlet } from 'react-router-dom';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as OfsIcon } from './icons/ofs.svg';
import { ReactComponent as DutiesIcon } from './icons/duties.svg';
import { ReactComponent as CommunicationsIcon } from './icons/communications.svg';
import { ReactComponent as ReglamentsIcon } from './icons/reglaments.svg';
import { ReactComponent as StaffIcon } from './icons/staff.svg';
import { ReactComponent as ReportsIcon } from './icons/reports.svg';

const UserProfile = () => {
    return (
        <div className='user-profile'>
            <Sidebar>
                <li className='profile-sidebar__item'>
                    <HomeIcon className='home-icon' />
                    <p>Главная</p>
                </li>
                <li className='profile-sidebar__item'>
                    <OfsIcon />
                    <p>ОФС</p>
                </li>
                <li className='profile-sidebar__item'>
                    <ReglamentsIcon />
                    <p>Регламенты</p>
                </li>
                <li className='profile-sidebar__item'>
                    <DutiesIcon />
                    <p>Мои обязанности</p>
                </li>
                <li className='profile-sidebar__item'>
                    <ReportsIcon className='reports'/>
                    <p>Отчеты</p>
                </li>
                <li className='profile-sidebar__item'>
                    <CommunicationsIcon />
                    <p>Коммуникации</p>
                </li>
                <li className='profile-sidebar__item'>
                    <StaffIcon />
                    <p>Сотрудники</p>
                </li>
            </Sidebar>
            <div className='user-profile__field'>
                <ProfileHeader />
                <div className='user-profile__content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
