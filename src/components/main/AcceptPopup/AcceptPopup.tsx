import './AcceptPopup.scss';
import { Button, Popup } from '../../support';

const AcceptPopup = ({ title, onClick, isOpen, onClose }) => {
    return (
        <Popup onClose={onClose} isOpen={isOpen}>
            <div className='accept-popup'>
                <p className='accept-popup__title'>{title}</p>
                <div className='accept-popup__buttons'>
                    <Button title='Нет' onClick={onClose} type='light-grey' />
                    <Button title='Да' onClick={onClick} type='light-red' />
                </div>
            </div>
        </Popup>
    );
};

export default AcceptPopup;
