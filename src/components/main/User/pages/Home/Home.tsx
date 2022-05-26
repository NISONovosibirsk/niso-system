import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
    AboutSystemIcon,
    CommonInfoIcon,
    InstitutionCardIcon,
    ReferenceIcon,
    RegulatorsIcon,
} from '../../../../../assets';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../store/actions/userProfileActions';
import ProfileReference from '../Profile/ProfileReference/ProfileReference';
import './Home.scss';
import HomeCard from './HomeCard/HomeCard';
import HomePopup from './HomePopup/HomePopup';

const Home = () => {
    const { reference } = useTypeSelector(state => state.userProfile);
    const { isLogged } = useTypeSelector(state => state.userStatus);
    const dispatch = useDispatch();

    const handleReference = () => {
        const newState = { ...reference };
        newState.isOpen = true;
        newState.type = 'statistics';
        dispatch(updateReference(newState));
    };

    const homeCards = [
        {
            text: 'Общая информация для пользователей',
            icon: <CommonInfoIcon />,
            type: 'commonInfo',
        },
        {
            text: 'Нормативные регуляторы МСОКО',
            icon: <RegulatorsIcon />,
            type: 'regulators',
        },
        {
            text: 'Общие сведения о муниципальной системе образования города Новосибирска',
            icon: <AboutSystemIcon />,
            type: 'aboutSystem',
        },
        {
            text: 'Список образовательных учреждений',
            icon: <InstitutionCardIcon />,
            type: 'institutionCard',
            route: 'listEI',
        },
    ];

    const notLoggedHomeCards = [
        {
            text: 'Общая информация для пользователей',
            icon: <CommonInfoIcon />,
            type: 'commonInfo',
        },
        {
            text: 'Нормативные регуляторы МСОКО',
            icon: <RegulatorsIcon />,
            type: 'regulators',
        },
    ];

    const handleLogged = () => {
        switch (isLogged) {
            case true:
                return homeCards;
            case false:
                return notLoggedHomeCards;
        }
    };

    return (
        <section className='user-home'>
            <ul className='user-home-list'>
                {handleLogged().map((card, index) => (
                    <HomeCard data={card} key={index} />
                ))}
            </ul>
            <ReferenceIcon
                className='user-home__reference'
                onClick={handleReference}
            />
            <ProfileReference />
            <HomePopup />
        </section>
    );
};

export default Home;
