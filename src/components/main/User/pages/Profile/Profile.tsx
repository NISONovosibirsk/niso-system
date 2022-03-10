import './Profile.scss';

const Profile = () => {
    return (
        <div className='user-profile'>
            <div className='user-profile-slider'>
                <div className='user-profile-slider__item'>
                    <p>Основное</p>
                    <hr />
                </div>
                <div className='user-profile-slider__item'>
                    <p>Оповещения</p>
                    <hr />
                </div>
                <div className='user-profile-slider__item'>
                    <p>Документы</p>
                    <hr />
                </div>
            </div>

            <form className='user-profile-documents'>
                <div className='user-profile-documents-form'>
                    <p className='user-profile-documents-form__header'>Код образовательного учреждения:</p>
                    <input className='user-profile-documents-form__input' placeholder='Впешите данные документов'/>
                </div>

            </form>
        </div>
    );
};

export default Profile;
