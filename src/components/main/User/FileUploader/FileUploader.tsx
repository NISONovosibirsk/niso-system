import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateParams } from '../../../../store/actions/userProfileActions';
import './FileUploader.scss';

const FileUploader = ({type}) => {
    const dispatch = useDispatch();
    const { documents } = useTypeSelector(state => state.userProfile);

    // const handleUpload = e => {
    //     const newFiles = { ...documents };
    //     newFiles.institutionCode.files = e.target.files[0];

    //     dispatch(updateParams(newFiles));

    //     const data = new FormData();

    //     if (documents.institutionCode.files !== null) {
    //         data.append('file', documents.institutionCode.files);
    //         axios
    //             .post('https://ptsv2.com/t/0ukuf-1647488352/post', data)
    //             .then(e => {
    //                 console.log('success!');
    //             })
    //             .catch(e => {
    //                 console.log(e);
    //             });
    //     }
    // };

    async function handleUpload (e) {
        const newFiles = {...documents};
        const userUpload = Array.from(e.target.files)

        switch (type) {
            case 'code':
                break;
        
            default:
                break;
        }

    }

    return (
        <form className='user-profile-documents__upload'>
            <p>Добавить файл</p>
            <input
                multiple={true}
                type='file'
                id='upload'
                onChange={handleUpload}
            />
            <label htmlFor='upload'>+ Прикрепить файл</label>
        </form>
    );
};

export default FileUploader;
