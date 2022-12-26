import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserPopup } from '../../../../../../store/actions/userStatusActions';
import './HomeCard.scss';

const HomeCard = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        data.route
            ? navigate(`/user/${data.route}`)
            : dispatch(
                  updateUserPopup({
                      isOpen: true,
                      type: data.type,
                      title: data.text,
                  })
              );
    };

    return (
        <li className='user-home__card' onClick={handleClick}>
            {data.icon}
            <p className='user-home__card-text'>{data.text}</p>
        </li>
    );
};

export default HomeCard;
