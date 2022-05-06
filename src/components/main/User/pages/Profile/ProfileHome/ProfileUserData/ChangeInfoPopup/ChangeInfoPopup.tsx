import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { Popup } from '../../../../../../../support';
import './ChangeInfoPopup.scss';
import ChangeProfilePassword from './ChangeProfilePassword/ChangeProfilePassword';
import ChangeProfileEmail from './ChangeProfileEmail';
import ChangeProfilePhone from './ChangeProfilePhone';
import { updatePopup } from '../../../../../../../../store/actions/userProfileActions';

const ChangeInfoPopup = ({ type }) => {
    const { popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = { ...popup };
        newState.isOpen = false;
        dispatch(updatePopup(newState));
    };

    const handleType = () => {
        switch (type) {
            case 'email':
                return <ChangeProfileEmail />;
            case 'phone':
                return <ChangeProfilePhone />;
            case 'password':
                return <ChangeProfilePassword />;
            default:
                break;
        }
    };

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            {handleType()}
        </Popup>
    );
};

export default ChangeInfoPopup;
