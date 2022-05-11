import { useDispatch } from 'react-redux';
import {
    LeadersIcon,
    ReferenceIcon,
    ReportsIcon,
    StaffIcon,
    VisitsIcon,
} from '../../../../../assets';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../store/actions/userProfileActions';
import ProfileReference from '../Profile/ProfileReference/ProfileReference';
import './Home.scss';

const Home = () => {

    const {reference} = useTypeSelector(state=> state.userProfile);
    const dispatch = useDispatch();

    const handleReference = () => {
        const newState = { ...reference };
        newState.isOpen = true;
        newState.type = 'statistics';
        dispatch(updateReference(newState));
    };

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
            <ReferenceIcon className='user-home__reference' onClick={handleReference}/>
            <ProfileReference />
        </div>
    );
};

export default Home;
