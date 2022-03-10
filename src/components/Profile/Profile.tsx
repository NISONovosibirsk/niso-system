import Sidebar from './Sidebar/Sidebar';
import './Profile.scss';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { Outlet } from 'react-router-dom';
import {
    HomeIcon,
    DutiesIcon,
    OfsIcon,
    CommunicationsIcon,
    ReglamentsIcon,
    StaffIcon,
    ReportsIcon,
} from '../../assets';

const Profile = () => {
    return (
        <div className='profile'>
            <Sidebar>
                <li className='profile-sidebar__item'>
                    <HomeIcon />
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
                    <ReportsIcon />
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
            <div className='profile__field'>
                <ProfileHeader />
                <div className='profile__content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Profile;
