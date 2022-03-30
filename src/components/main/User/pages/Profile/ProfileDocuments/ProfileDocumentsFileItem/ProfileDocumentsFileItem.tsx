import { ImageFileIcon, ConstructorIcon } from '../../../../../../../assets';
import './ProfileDocumentsFileItem.scss';

const ProfileDocumentsFileItem = ({ file }) => {
    console.log(file.type);

    const handleFileType = (type) => {
        switch (type) {
            case 'image/jpeg':
            case 'image/jpg':
            case 'image/png':
                return <ImageFileIcon />;
            default:
                return <ConstructorIcon />
        }
    };

    return (
        <div className='user-profile-documents-files-item'>
            <div className='user-profile-documents-files-item__icon'>
                {handleFileType(file.type)}
            </div>
            <p className='user-profile-documents-files-item__name'>{file.name}</p>
        </div>
    );
};

export default ProfileDocumentsFileItem;
