import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './SidebarItem.scss';

const SidebarItem = ({ sidebarItemData }) => {
    const { path, icon, text } = sidebarItemData;

    const resolved = useResolvedPath(path);
    const match = useMatch({
        path: resolved.pathname,
        end: false,
    });

    return (
        <li className={`sidebar-item ${match && 'sidebar-item_active'}`}>
            <Link className='sidebar-item__link' to={path}>
                {icon}
                <p className='sidebar-item__text'>{text}</p>
            </Link>
        </li>
    );
};

export default SidebarItem;
