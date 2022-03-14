import './Profile.scss';
import ProfileDocForm from './ProfileDocuments/ProfileDocuments';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileNavItem from './ProfileNavItem/ProfileNavItem';

const tabs = [
    { text: 'Основное', path: '' },
    { text: 'Оповещения', path: 'notifications' },
    { text: 'Документы', path: 'documents' },
];

const Profile = () => {
    return (
        <div className='user-profile'>
            <ul className='user-profile-tabs'>
                {tabs.map( tab => (
                    <ProfileNavItem tab={tab} key={tab.path}/>
                ))}
            </ul>
            <Routes>
                <Route path=''/>
                <Route path='notifications' />
                <Route path='documents' element={<ProfileDocForm />} />
            </Routes>
        </div>
    );
};

export default Profile;
