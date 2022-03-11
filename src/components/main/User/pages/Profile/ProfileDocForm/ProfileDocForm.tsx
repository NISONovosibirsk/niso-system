import './ProfileDocForm.scss';

const ProfileDocForm = ({form}) => {
    return (
        <div className='profile-documents-form'>
            <p className='profile-documents-form__header'>
                {`${form.title}:`}
            </p>
            <p>Добавить файл</p>
            <input
                className='profile-documents-form__input'
                placeholder='Впешите данные документов'
            />
        </div>
    );
};

export default ProfileDocForm;
