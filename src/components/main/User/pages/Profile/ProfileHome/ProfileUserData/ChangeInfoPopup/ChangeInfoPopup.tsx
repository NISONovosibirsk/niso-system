import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { resetDataChanging } from '../../../../../../../../store/actions/userProfileActions';
import { Popup } from '../../../../../../../support';
import './ChangeInfoPopup.scss';
import ChangeProfilePassword from './ChangeProfilePassword';
import ChangeProfileContact from './ChangeProfileContact';

const ChangeInfoPopup = ({ type }) => {
    const { popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(resetDataChanging());
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
