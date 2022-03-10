import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className='profile-user'>
            <div className='profile-user-slider'>
                <div className='profile-user-slider__item'>
                    <p>Основное</p>
                    <hr />
                </div>
                <div className='profile-user-slider__item'>
                    <p>Оповещения</p>
                    <hr />
                </div>
                <div className='profile-user-slider__item'>
                    <p>Документы</p>
                    <hr />
                </div>
            </div>

            <form className='profile-user-documents'>
                <div className='profile-user-documents-form'>
                    <p className='profile-user-documents-form__header'>Код образовательного учреждения:</p>
                    <input className='profile-user-documents-form__input'/>
                </div>
                
            </form>
        </div>
    );
};

export default UserProfile;
