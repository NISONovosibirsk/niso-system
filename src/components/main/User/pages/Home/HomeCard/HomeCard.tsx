import './HomeCard.scss';

const HomeCard = ({data}) => {
    return (
        <li className='user-home-card'>
            <p className='user-home-card__text'>{data.text}</p>
        </li>
    );
};

export default HomeCard;
