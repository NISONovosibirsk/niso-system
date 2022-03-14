import './ProfileDocuments.scss';

const ProfileDocuments = () => {
    const forms = [
        { title: 'Код образовательного учреждения' },
        { title: 'Название образовательного учреждения' },
        { title: 'ИНН образовательного учреждения' },
    ];

    const handleUpload = e => {
        const files = [...e.target.files];
        console.log(files)
    };

    //need to add "accept" attribute to file form
    return (
        <form className='user-profile-documents'>
            {forms.map(form => (
                <>
                    <p className='user-profile-documents__header'>{`${form.title}:`}</p>
                    <div className='user-profile-documents__upload'>
                        <p>Добавить файл</p>
                        <input
                            multiple={true}
                            type='file'
                            id='upload'
                            onChange={handleUpload}
                        />
                        <label htmlFor='upload'>+ Прикрепить файл</label>
                    </div>
                    <input className='user-profile-documents__input' />
                </>
            ))}
        </form>
    );
};

export default ProfileDocuments;
