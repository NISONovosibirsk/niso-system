import './StatusPopup.scss';
import { successfulIcon, unsuccessfulIcon, errorIcon } from '../../../assets';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../store/actions/statusPopupActions';
import { Popup, Preloader } from '../../support';

const StatusPopup = () => {
    const { isOpen, statusText, statusCode } = useTypeSelector(
        state => state.statusPopup
    );
    const dispatch = useDispatch();

    let icon;

    switch (statusCode) {
        case '200':
            icon = (
                <img
                    className='status-popup__icon'
                    src={successfulIcon}
                    alt='успешно'
                ></img>
            );
            break;

        case '401':
            icon = (
                <img
                    className='status-popup__icon'
                    src={unsuccessfulIcon}
                    alt='ошибка'
                ></img>
            );
            break;

        case '500':
            icon = (
                <img
                    className='status-popup__icon'
                    src={errorIcon}
                    alt='неизвестная ошибка'
                ></img>
            );
            break;

        case 'loader':
            icon = <Preloader />;
            break;
    }

    const handleClose = () => {
        dispatch(setOpenStatus(false));
        dispatch(updateStatusText(''));
        dispatch(updateStatusCode(''));
    };

    return (
        <Popup onClose={handleClose} isOpen={isOpen}>
            {
                <div className='status-popup'>
                    {icon}
                    {statusText ? (
                        <p className='status-popup__text'>{statusText}</p>
                    ) : null}
                </div>
            }
        </Popup>
    );
};

export default StatusPopup;
