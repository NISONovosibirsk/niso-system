import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../../store/actions/userProfileActions';
import { Button, Popup } from '../../../../../support';
import DocumentsReference from './DocumentsReference';
import './ProfileReference.scss';

const ProfileReference = () => {
    const { reference } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = { ...reference };
        newState.isOpen = false;
        dispatch(updateReference(newState));
    };

    const handleType = () => {
        switch (reference.type) {
            case 'documents':
                return <DocumentsReference />;

            default:
                break;
        }
    };

    return (
        <Popup isOpen={reference.isOpen} onClose={handleClose}>
            {handleType()}
        </Popup>
    );
};

export default ProfileReference;
