import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './SidebarItem.scss';

const SidebarItem = ({ sidebarItemData, isOpen }) => {
    const { path, icon, text } = sidebarItemData;

    const resolved = useResolvedPath(path);
    const match = useMatch({
        path: resolved.pathname,
        end: false,
    });

    return (
        <li className={`sidebar-item ${match && 'sidebar-item_active'}`}>
            <Link className={`sidebar-item__link ${isOpen ? '' : 'sidebar-item__link_collapsed'}`} to={path} title={text}>
                {icon}
                {isOpen && <p className='sidebar-item__text'>{text}</p>}
            </Link>
        </li>
    );
};

export default SidebarItem;
