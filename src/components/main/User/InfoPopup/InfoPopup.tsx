import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateUserPopup } from '../../../../store/actions/userStatusActions';
import { Button, Popup } from '../../../support';
import './InfoPopup.scss';
import MaisCommonInfo from './static/MaisCommonInfo';
import ProfileDocumentsInfo from './static/ProfileDocumentsInfo';
import AisFullInfo from './static/ProfileDocumentsInfo';

const InfoPopup = () => {
    const { popup } = useTypeSelector(state => state.userStatus);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(updateUserPopup({ isOpen: false, type: '', title: '' }));
    };

    const handlePopup = () => {
        switch (popup.type) {
            case 'commonInfo':
                return <MaisCommonInfo />;
            case 'documentsInfo':
                return <ProfileDocumentsInfo />;
            case 'aboutSystem':
                return <AisFullInfo />;
            default:
                break;
        }
    };

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            <section className='user-info-popup'>
                <h1 className='user-info-popup__title'>{popup.title}</h1>
                <div className='user-info-popup__content'>{handlePopup()}</div>
                <Button title='Изучил 👍' width='200px' onClick={handleClose} />
            </section>
        </Popup>
    );
};

export default InfoPopup;
