import './Profile.scss';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileNavItem from './ProfileNavItem/ProfileNavItem';
import ProfileDocuments from './ProfileDocuments/ProfileDocuments';
import ProfileInfo from './ProfileHome/ProfileHome';
import { ReferenceIcon } from '../../../../../assets';

const tabs = [
    { text: 'Основное', path: '' },
    { text: 'Оповещения', path: 'notifications' },
    { text: 'Документы', path: 'documents' },
];

const Profile = () => {
    return (
        <div className='user-profile'>
            <ul className='user-profile-tabs'>
                {tabs.map(tab => (
                    <ProfileNavItem tab={tab} key={tab.path} />
                ))}
                <li className='user-profile-tabs__reference'>
                    <ReferenceIcon />
                </li>
            </ul>
            <Routes>
                <Route path='' element={<ProfileInfo />} />
                <Route path='notifications' />
                <Route path='documents' element={<ProfileDocuments />} />
            </Routes>
        </div>
    );
};

export default Profile;
