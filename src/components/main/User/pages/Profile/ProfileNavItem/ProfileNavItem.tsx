import './ProfileNavItem.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ReferenceIcon } from '../../../../../../assets';
import { useDispatch } from 'react-redux';
import { updateUserPopup } from '../../../../../../store/actions/userStatusActions';

const ProfileNavItem = ({ tab }) => {
    const dispatch = useDispatch();
    const { path, text } = tab;

    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });
    
    const handleReference = () => {
        dispatch(
            updateUserPopup({
                isOpen: true,
                type: 'documentsInfo',
                title: 'Документы',
            })
        );
    }

    return (
        <li
            className={`user-profile-tabs-item ${
                match && 'user-profile-tabs-item_active'
            }`}
        >
            <Link className='user-profile-tabs-item__link' to={path}>
                {text}
            </Link>
            {match && path === 'documents' && (
                <ReferenceIcon
                    className='user-profile-tabs-item__reference'
                    onClick={handleReference}
                />
            )}
        </li>
    );
};

export default ProfileNavItem;
