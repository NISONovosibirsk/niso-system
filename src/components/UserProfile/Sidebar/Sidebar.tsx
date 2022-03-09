import './Sidebar.scss';
import { sidebarLogo } from '../../../assets';

const Sidebar = ({ children }) => {
    return (
        <div className='profile-sidebar_active'>
            <nav className='profile-sidebar__navigation'>
                <img className='profile-sidebar__logo' src={sidebarLogo} />
                <ul className='profile-sidebar__list'>{children}</ul>
                <div className='profile-sidebar__footer'>
                    <p>Политика конфиденциальности</p>
                    <p>Все права защищены</p>
                    <button className='profile-sidebar__support'></button>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
