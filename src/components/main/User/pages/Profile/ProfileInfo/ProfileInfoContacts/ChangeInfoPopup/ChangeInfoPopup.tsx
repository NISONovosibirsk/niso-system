import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../../store/actions/userProfileActions';
import { Popup } from '../../../../../../../support';
import './ChangeInfoPopup.scss';

const ChangeInfoPopup = ({type}) => {
    const {popup} = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = {...popup};
        newState.isOpen = false
        dispatch(updatePopup(newState))
    }

    const handleType =() => {
        switch (type) {
            case 'phone':
                return <div>Phone Edit</div>
            case 'email':
                return <div>Email Edit</div>
            case 'password':
                return <div>Password Edit</div>
            default:
                break;
        }
    }

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            {handleType()}
        </Popup>
    )
}

export default ChangeInfoPopup;