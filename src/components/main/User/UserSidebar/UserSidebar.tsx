import { useState } from 'react';
import { MaisLogo, BurgerIcon } from '../../../../assets';
import SidebarItem from './SidebarItem/SidebarItem';
import './UserSidebar.scss';

const UserSidebar = ({ sidebarListData }) => {
    const techSupport = {
        path: 'support',
        text: 'Техподдержка',
        icon: '',
    };

    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className={isOpen ? 'user-sidebar' : 'user-sidebar user-sidebar_collapsed'}>
            {/* <div className='user-sidebar__logo'>
                <MaisLogo />
                <p className='user-sidebar__caption'>
                    Муниципальная система оценки качества образования города
                    Новосибирска
                </p>
            </div> */}
            <div className='user-sidebar__header'>
                <MaisLogo />
                <BurgerIcon/>
                <p className='user-sidebar__caption'>
                    Муниципальная система оценки качества образования города
                    Новосибирска
                </p>
            </div>
            <ul className='user-sidebar__list'>
                {sidebarListData.map(sidebarItemData => (
                    <SidebarItem
                        sidebarItemData={sidebarItemData}
                        key={sidebarItemData.path}
                    />
                ))}
            </ul>
            <div className='user-sidebar__footer'>
                <p className='user-sidebar__politics'>Политика конфиденциальности</p>
                <p className='user-sidebar__politics'>Все права защищены</p>
                <button className='user-sidebar__support'></button>
                <SidebarItem sidebarItemData={techSupport}/>
            </div>
        </nav>
    );
};

export default UserSidebar;
