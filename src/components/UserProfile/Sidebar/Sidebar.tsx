import './Sidebar.scss';
import { sidebarLogo, sidebarAudio } from '../../../assets';

const Sidebar = ({ children }) => {
    return (
        <div className='sidebar_active'>
            <nav className='sidebar__navigation'>
                <img className='sidebar__logo' src={sidebarLogo} />
                <ul className='sidebar__list'>{children}</ul>
                <div className='sidebar__footer'>
                    <p>Политика конфиденциальности</p>
                    <p>Все права защищены</p>
                    <button className='sidebar__audio'>
                        <img src={sidebarAudio} />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
