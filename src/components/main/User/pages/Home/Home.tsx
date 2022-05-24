import { useDispatch } from 'react-redux';
import { AboutSystemIcon, CommonInfoIcon, InstitutionCardIcon, ReferenceIcon, RegulatorsIcon } from '../../../../../assets';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../store/actions/userProfileActions';
import ProfileReference from '../Profile/ProfileReference/ProfileReference';
import './Home.scss';
import HomeCard from './HomeCard/HomeCard';

const Home = () => {
    const { reference } = useTypeSelector(state => state.userProfile);
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
        },
        { text: 'Нормативные регуляторы МСОКО', icon: <RegulatorsIcon /> },
        {
            text: 'Общие сведения о муниципальной системе образования города Новосибирска',
            icon: <AboutSystemIcon />,
        },
        {
            text: 'Карточка образовательного учреждения',
            icon: <InstitutionCardIcon />,
        },
    ];

    return (
        <section className='user-home'>
            <ul className='user-home-list'>
                {homeCards.map((card, index) => (
                    <HomeCard data={card} key={index} />
                ))}
            </ul>
            <ReferenceIcon
                className='user-home__reference'
                onClick={handleReference}
            />
            <ProfileReference />
        </section>
    );
};

export default Home;
