import { MaisLogo, NisoLogo } from '../../../../assets';
import SidebarItem from './SidebarItem/SidebarItem';
import './UserSidebar.scss';

const UserSidebar = ({ sidebarListData }) => {
    const techSupport = {
        path: 'support',
        text: 'Техподдержка',
        icon: '',
    };

    return (
        <nav className='user-sidebar'>
            <div className='user-sidebar__logo'>
                <MaisLogo />
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
                <p>Политика конфиденциальности</p>
                <p>Все права защищены</p>
                <button className='user-sidebar__support'></button>
                <SidebarItem sidebarItemData={techSupport}/>
            </div>
        </nav>
    );
};

export default UserSidebar;
