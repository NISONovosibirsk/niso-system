import './HomeCard.scss';

const HomeCard = ({data}) => {
    return (
        <li className='user-home-card'>
            {data.icon}
            <p className='user-home-card__text'>{data.text}</p>
        </li>
    );
};

export default HomeCard;
