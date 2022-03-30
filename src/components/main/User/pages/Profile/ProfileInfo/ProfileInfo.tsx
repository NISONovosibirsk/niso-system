import { ChangePhotoIcon } from '../../../../../../assets';
import './ProfileInfo.scss';

const ProfileInfo = () => {

    return(
        <div className='user-profile-info'>
            <div className='user-profile-info-header'>
                <div className='user-profile-info-header__avatar'>
                    <div className='user-profile-info-header__photo'>
                        <button className='user-profile-info-header__select-photo'>
                            <ChangePhotoIcon/>
                        </button>
                    </div>
                </div>
                <ul className='user-profile-info-header__info-list'>
                    <li className='user-profile-info-header__name'>Арбамов Владимир Алексеевич</li>
                    <li className='user-profile-info-header__position'>Генеральный директор</li>
                </ul>
            </div>
            <ul className='user-profile-info-contacts'>
                <li className='user-profile-info-contacts_phone'>+7 (964) 872 - 89 - 59</li>
                <li className='user-profile-info-contacts_email'>elcor58@yandex.ru</li>
                <li className='user-profile-info-contacts_password'>Изменить пароль</li>
            </ul>
            <div className='user-profile-privileges'>
                <p>Выполняемые функции:</p>
                <p>Генеральный директор(Администратор)</p>
            </div>
        </div>
    )
};

export default ProfileInfo;
