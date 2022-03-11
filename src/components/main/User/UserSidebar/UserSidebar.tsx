import { Link, useLocation } from 'react-router-dom';
import { NisoLogo } from '../../../../assets';
import './UserSidebar.scss';

const UserSidebar = ({ sidebarListData }) => {
    const location = useLocation();

    return (
        <div className='user-sidebar_active'>
            <nav className='user-sidebar__navigation'>
                <NisoLogo className='user-sidebar__logo' />
                <ul className='user-sidebar__list'>
                    {sidebarListData.map(sidebarItemData => (
                        <li
                            key={sidebarItemData.path}
                            className={`user-sidebar__item ${
                                location.pathname ===
                                `/user/${sidebarItemData.path}`
                                    ? 'user-sidebar__item_active'
                                    : ''
                            }`}
                        >
                            <Link
                                className='user-sidebar__link'
                                to={sidebarItemData.path}
                            >
                                {sidebarItemData.icon}
                                <p className='user-sidebar__text'>
                                    {sidebarItemData.text}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='user-sidebar__footer'>
                    <p>Политика конфиденциальности</p>
                    <p>Все права защищены</p>
                    <button className='user-sidebar__support'></button>
                </div>
            </nav>
        </div>
    );
};

export default UserSidebar;
