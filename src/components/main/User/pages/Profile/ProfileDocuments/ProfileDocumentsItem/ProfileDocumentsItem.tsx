import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { IProfileDocuments } from '../../../../../../../interfaces';
import { updateParams } from '../../../../../../../store/actions/userProfileActions';
import FileUploader from '../../../../FileUploader/FileUploader';
import './ProfileDocumentsItem.scss';

const ProfileDocumentsItem = ({ form }: IProfileDocuments) => {
    const { documents } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleTextInput = (e, type) => {
        const newState = { ...documents };

        switch (type) {
            case 'code':
                newState.institutionCode.value = e.target.value;
                break;
            case 'name':
                newState.institutionName.value = e.target.value;
                break;
            case 'inn':
                newState.institutionInn.value = e.target.value;
                break;
            default:
                break;
        }
        dispatch(updateParams(newState));
    };

    return (
        <>
            <p className='user-profile-documents__header'>{`${form.title}:`}</p>
            <FileUploader />
            <input
                className='user-profile-documents__input'
                onChange={e => {
                    handleTextInput(e, form.type);
                }}
            />
        </>
    );
};

export default ProfileDocumentsItem;
