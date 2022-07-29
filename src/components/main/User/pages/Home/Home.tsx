import { useDispatch } from 'react-redux';
import {
    AboutSystemIcon,
    CommonInfoIcon,
    InstitutionCardIcon,
    ReferenceIcon,
    RegulatorsIcon,
} from '../../../../../assets';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import './Home.scss';
import './HomeAdaptive.scss';
import HomeCard from './HomeCard/HomeCard';
import InfoPopup from '../../InfoPopup/InfoPopup';
import { updateUserPopup } from '../../../../../store/actions/userStatusActions';

const Home = () => {
    const { isLogged } = useTypeSelector(state => state.userStatus);
    const dispatch = useDispatch();

    const handleReference = () => {
        dispatch(
            updateUserPopup({
                isOpen: true,
                type: 'homeInfo',
                title: 'Главная',
            })
        );
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
            <InfoPopup />
        </section>
    );
};

export default Home;
