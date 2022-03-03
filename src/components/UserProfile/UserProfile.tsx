import Sidebar from './Sidebar/Sidebar';
import './UserProfile.scss';
import {
    communications,
    duties,
    ofs,
    reglaments,
    reports,
    staff,
    home,
} from './icons';
import Searchbar from './SearchBar/Searchbar';

const UserProfile = () => {
    return (
        <div className='user-profile'>
            <Sidebar>
                <li className='sidebar__item'>
                    <img src={home} />
                    Главная
                </li>
                <li className='sidebar__item'>
                    <img src={ofs} />
                    ОФС
                </li>
                <li className='sidebar__item'>
                    <img src={reglaments} />
                    Регламенты
                </li>
                <li className='sidebar__item'>
                    <img src={duties} />
                    Мои обязанности
                </li>
                <li className='sidebar__item'>
                    <img src={reports} />
                    Отчеты
                </li>
                <li className='sidebar__item'>
                    <img src={communications} />
                    Коммуникации
                </li>
                <li className='sidebar__item'>
                    <img src={staff} />
                    Сотрудники
                </li>
            </Sidebar>
            <Searchbar/>
            <div className='sidebar__content'>
                
            </div>
        </div>
    );
};

export default UserProfile;
