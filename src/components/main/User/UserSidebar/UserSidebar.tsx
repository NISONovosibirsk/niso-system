import { NisoLogo } from '../../../../assets';
import SidebarItem from './SidebarItem/SidebarItem';
import './UserSidebar.scss';

const UserSidebar = ({ sidebarListData }) => {
    return (
        <nav className='user-sidebar'>
            <NisoLogo className='user-sidebar__logo' />
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
            </div>
        </nav>
    );
};

export default UserSidebar;
