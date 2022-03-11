import './Profile.scss';
import ProfileDocForm from './ProfileDocForm/ProfileDocForm';
import { Routes, Route, Link } from 'react-router-dom';

const slider = [
    { title: 'Код образовательного учреждения' },
    { title: 'Название образовательного учреждения' },
    { title: 'ИНН образовательного учреждения' },
];

const Profile = () => {
    return (
        <div className='profile'>
            <ul className='profile-tabs'>
                <li className='profile-tabs__item'>
                    <Link className='profile-tabs__link' to=''>
                        <p className='profile-tabs'>Основное</p>
                    </Link>
                </li>
                <li className='profile-tabs__item'>
                    <Link className='profile-tabs__link' to='notifications'>
                        Оповещения
                    </Link>
                </li>
                <li className='profile-tabs__item'>
                    <Link className='profile-tabs__link' to='documents'>
                        Документы
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route path='' element={<p>Settings</p>} />
                <Route path='notifications' element={<p>Noti</p>} />
                <Route path='documents' element={<p>Doc</p>} />
            </Routes>
        </div>
    );
};

export default Profile;
