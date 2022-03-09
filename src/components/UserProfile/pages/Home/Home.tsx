import './Home.scss';
import { ReactComponent as StaffIcon } from '../../icons/staff.svg';
import { ReactComponent as LeadersIcon } from '../../icons/leaders.svg';
import { ReactComponent as VisitsIcon } from '../../icons/visits.svg';
import { ReactComponent as ReportsIcon } from '../../icons/reports.svg';

const Home = () => {
    return (
        <div className='profile-home'>
            <ul className='profile-home-list'>
                <li className='profile-home-card'>
                    <StaffIcon className='profile-home-card__icon' />
                    <p className='profile-home-card__title'>Сотрудников</p>
                    <p className='profile-home-card__count'>30</p>
                </li>
                <li className='profile-home-card'>
                    <LeadersIcon className='profile-home-card__icon' />
                    <p className='profile-home-card__title'>Руководителей</p>
                    <p className='profile-home-card__count'>14</p>
                </li>
                <li className='profile-home-card'>
                    <VisitsIcon className='profile-home-card__icon' />
                    <p className='profile-home-card__title'>Заходило сегодня</p>
                    <p className='profile-home-card__count'>30</p>
                </li>
                <li className='profile-home-card'>
                    <ReportsIcon className='profile-home-card__icon' />
                    <p className='profile-home-card__title'>Отчеты</p>
                    <p className='profile-home-card__count'>31 2</p>
                </li>
            </ul>
        </div>
    );
};

export default Home;
