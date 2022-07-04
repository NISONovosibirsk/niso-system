import './Profile.scss';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileNavItem from './ProfileNavItem/ProfileNavItem';
import ProfileDocuments from './ProfileDocuments/ProfileDocuments';
import ProfileHome from './ProfileHome/ProfileHome';

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
            </ul>
            <Routes>
                <Route path='' element={<ProfileHome />} />
                <Route path='notifications' />
                <Route path='documents' element={<ProfileDocuments />} />
            </Routes>
        </div>
    );
};

export default Profile;
