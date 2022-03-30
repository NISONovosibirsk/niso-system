import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { IProfileDocuments } from '../../../../../../../interfaces';
import { updateParams } from '../../../../../../../store/actions/userProfileActions';
import FileUploader from '../FileUploader/FileUploader';

import './ProfileDocumentsItem.scss';

const ProfileDocumentsItem = ({ form }: IProfileDocuments) => {
    const { documents } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleTextInput = e => {
        const { name } = e.target;
        const newState = { ...documents };

        switch (name) {
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
        <div className='user-profile-documents-item'>
            <p className='user-profile-documents-item__header'>{`${form.title}:`}</p>
            <FileUploader type={form.type} />
            <input
                className='user-profile-documents-item__input'
                onChange={handleTextInput}
                name={form.type}
            />
        </div>
    );
};

export default ProfileDocumentsItem;
