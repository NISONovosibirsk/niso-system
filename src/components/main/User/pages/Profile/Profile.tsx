import './Profile.scss';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-slider'>
                <div className='profile-slider__item'>
                    <p>Основное</p>
                    <hr />
                </div>
                <div className='profile-slider__item'>
                    <p>Оповещения</p>
                    <hr />
                </div>
                <div className='profile-slider__item'>
                    <p>Документы</p>
                    <hr />
                </div>
            </div>

            <form className='profile-documents'>
                <div className='profile-documents-form'>
                    <p className='profile-documents-form__header'>Код образовательного учреждения:</p>
                    <input className='profile-documents-form__input' placeholder='Впешите данные документов'/>
                </div>

            </form>
        </div>
    );
};

export default Profile;
