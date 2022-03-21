import axios from 'axios';
import './FileUploader.scss';

const FileUploader = ({ type }) => {

    async function handleUpload(e, type) {
        console.log(type);
        const userUpload = [...e.target.files];
        const data = new FormData();

        userUpload.map(file => {
            data.append(type, file)
        })

        //mock server url
        await axios
            .post('https://ptsv2.com/t/j8vyi-1647833620/post', data)
            .then(() => {
                console.log('success!');
            })
            .catch(error => console.log(error));
    }

    return (
        <form className='user-profile-documents__upload'>
            <p>Добавить файл</p>
            <input
                multiple={true}
                type='file'
                id='upload'
                onChange={(e) => {handleUpload(e, type)}}
            />
            <label htmlFor='upload'>+ Прикрепить файл</label>
        </form>
    );
};

export default FileUploader;
