import './ProfileNavItem.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ReferenceIcon } from '../../../../../../assets';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { updateReference } from '../../../../../../store/actions/userProfileActions';

const ProfileNavItem = ({ tab }) => {
    const { reference } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();
    const { path, text } = tab;

    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });

    const handleReference = () => {
        const newState = { ...reference };
        newState.isOpen = true;
        newState.type = path;
        dispatch(updateReference(newState));
    };

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
