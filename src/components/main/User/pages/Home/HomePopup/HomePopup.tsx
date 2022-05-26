import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateUserPopup } from '../../../../../../store/actions/userStatusActions';
import { Button, Popup } from '../../../../../support';
import './HomePopup.scss';
import MaisCommonInfo from './MaisCommonInfo';

const HomePopup = () => {
    const { popup } = useTypeSelector(state => state.userStatus);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(updateUserPopup({ isOpen: false, type: '', title: '' }));
    };

    const handlePopup = () => {
        switch (popup.type) {
            case 'commonInfo':
                return <MaisCommonInfo />;
            default:
                break;
        }
    };

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            <section className='user-home-popup'>
                <h1 className='user-home-popup__title'>{popup.title}</h1>
                <div className='user-home-popup__content'>{handlePopup()}</div>
                <Button title='Изучил 👍' width='200px' onClick={handleClose} />
            </section>
        </Popup>
    );
};

export default HomePopup;
