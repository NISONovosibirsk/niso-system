import {
    LeadersIcon,
    ReportsIcon,
    StaffIcon,
    VisitsIcon,
} from '../../../../../assets';
import './Home.scss';

const Home = () => {
    return (
        <div className='user-home'>
            <ul className='user-home-list'>
                <li className='user-home-card'>
                    <StaffIcon className='user-home-card__icon' />
                    <p className='user-home-card__title'>Сотрудников</p>
                    <p className='user-home-card__count'>30</p>
                </li>
                <li className='user-home-card'>
                    <LeadersIcon className='user-home-card__icon' />
                    <p className='user-home-card__title'>Руководителей</p>
                    <p className='user-home-card__count'>14</p>
                </li>
                <li className='user-home-card'>
                    <VisitsIcon className='user-home-card__icon' />
                    <p className='user-home-card__title'>Заходило сегодня</p>
                    <p className='user-home-card__count'>30</p>
                </li>
                <li className='user-home-card'>
                    <ReportsIcon className='user-home-card__icon' />
                    <p className='user-home-card__title'>Отчеты</p>
                    <p className='user-home-card__count'>31 2</p>
                </li>
            </ul>
        </div>
    );
};

export default Home;
