import { useDispatch } from 'react-redux';
import { updateUserPopup } from '../../../../../../store/actions/userStatusActions';
import './HomeCard.scss';

const HomeCard = ({ data }) => {
    const dispatch = useDispatch();

    const handlePopup = () => {
        dispatch(
            updateUserPopup({ isOpen: true, type: data.type, title: data.text })
        );
    };

    return (
        <li className='user-home-card' onClick={handlePopup}>
            {data.icon}
            <p className='user-home-card__text'>{data.text}</p>
        </li>
    );
};

export default HomeCard;
