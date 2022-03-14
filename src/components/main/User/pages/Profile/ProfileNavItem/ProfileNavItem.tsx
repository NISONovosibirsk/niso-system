import './ProfileNavItem.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ProfileNavItem = ({ tab }) => {
    const { path, text } = tab;

    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <li
            className={`user-profile-tabs-item ${
                match && 'user-profile-tabs-item_active'
            }`}
        >
            <Link className='user-profile-tabs-item__link' to={path}>
                {text}
            </Link>
        </li>
    );
};

export default ProfileNavItem;
