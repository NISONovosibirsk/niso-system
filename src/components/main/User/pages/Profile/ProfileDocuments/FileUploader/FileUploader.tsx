import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ImageFileIcon } from '../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updateParams } from '../../../../../../../store/actions/userProfileActions';
import ProfileDocumentsFileItem from '../ProfileDocumentsFileItem/ProfileDocumentsFileItem';
import './FileUploader.scss';

const FileUploader = ({ type }) => {
    const { documents } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    async function handleUpload(e) {
        const { files, name } = e.target;
        const userUpload = [...files];
        const data = new FormData();
        const newFiles = { ...documents };

        userUpload.forEach(file => {
            data.append(name, file);
        });

        //mock server url
        await axios
            // .post('https://ptsv2.com/t/j8vyi-1647833620/post', data)
            .post('https://80e7b11d-930e-4ae6-9fdf-5c821c7e84fd.mock.pstmn.io/post', data)
            .then(() => {
                console.log('success!');
                switch (name) {
                    case 'code':
                        newFiles.institutionCode.files =
                            newFiles.institutionCode.files.concat(userUpload);
                        dispatch(updateParams(newFiles));
                        break;
                    case 'name':
                        newFiles.institutionName.files =
                            newFiles.institutionName.files.concat(userUpload);
                        dispatch(updateParams(newFiles));
                        break;
                    case 'inn':
                        newFiles.institutionInn.files =
                            newFiles.institutionInn.files.concat(userUpload);
                        dispatch(updateParams(newFiles));
                        break;
                    default:
                        break;
                }
            })
            .catch(error => console.log(error));
    }

    const handleFiles = type => {
        switch (type) {
            case 'code':
                return documents.institutionCode.files;
            case 'name':
                return documents.institutionName.files;
            case 'inn':
                return documents.institutionInn.files;
            default:
                break;
        }
    };

    return (
        <form className='user-profile-documents-upload'>
            <p className='user-profile-documents-upload__caption'>
                Добавить файл
            </p>
            <input
                multiple={true}
                type='file'
                id={type}
                onChange={handleUpload}
                name={type}
            />
            <label htmlFor={type}>+ Прикрепить файл</label>
            <div className='user-profile-documents-files'>
                {handleFiles(type) &&
                    handleFiles(type).map((file, index) => (
                        <ProfileDocumentsFileItem file={file} key={index}/>
                    ))}
            </div>
        </form>
    );
};

export default FileUploader;
