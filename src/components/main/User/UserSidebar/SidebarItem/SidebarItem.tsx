import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ISidebarListItem } from '../../../../../interfaces';
import './SidebarItem.scss';

export interface Props {
    sidebarItemData: ISidebarListItem;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SidebarItem: React.FC<Props> = ({
    sidebarItemData,
    isOpen,
    setIsOpen,
}) => {
    const { path, icon, text } = sidebarItemData;

    const resolved = useResolvedPath(path);
    const match = useMatch({
        path: resolved.pathname,
        end: false,
    });

    const handleClick = () => {
        window.innerWidth <= 603 && setIsOpen(false);
    };

    return (
        <li className={`sidebar-item ${match && 'sidebar-item_active'}`}>
            <Link
                onClick={handleClick}
                className={`sidebar-item__link ${
                    isOpen ? '' : 'sidebar-item__link_collapsed'
                }`}
                to={path}
                title={text}
            >
                {icon}
                {isOpen && <p className='sidebar-item__text'>{text}</p>}
            </Link>
        </li>
    );
};

export default SidebarItem;
