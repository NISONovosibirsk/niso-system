import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    updateChangeData,
    updatePopup,
} from '../../../../../../../../store/actions/userProfileActions';
import { Popup } from '../../../../../../../support';
import './ChangeInfoPopup.scss';
import ChangeProfilePassword from './ChangeProfilePassword';
import ChangeProfileContact from './ChangeProfileContact';

const ChangeInfoPopup = ({ type }) => {
    const { popup, changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = { ...popup };
        const newData = { ...changeData };

        newState.isOpen = false;
        newState.type = '';
        newState.title = '';

        newData.phone = '';
        newData.email = '';
        newData.verificationCode = '';
        newData.password.currentPassword = '';
        newData.password.newPassword = '';
        newData.password.confirmPassword = '';

        dispatch(updatePopup(newState));
        dispatch(updateChangeData(newData));
    };

    const handleType = () => {
        switch (type) {
            case 'email':
            case 'phone':
                return <ChangeProfileContact />;
            case 'password':
                return <ChangeProfilePassword />;
            default:
                break;
        }
    };

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            <form className='user-data-edit'>{handleType()}</form>
        </Popup>
    );
};

export default ChangeInfoPopup;
