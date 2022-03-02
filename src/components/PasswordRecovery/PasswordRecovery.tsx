import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { AuthForm } from '..';
import { nisoLogo } from '../../assets';
import './PasswordRecovery.scss';
import {
    setIsValid,
    updateEmailErrorMessage,
    updateEmailValue,
} from '../../store/actions/loginActions';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../store/actions/statusPopupActions';

const PasswordRecovery = () => {
    const { email, emailError, isValid } = useTypeSelector(
        state => state.login
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { value, validationMessage } = e.target;

        dispatch(updateEmailValue(value));
        dispatch(updateEmailErrorMessage(validationMessage));

        dispatch(setIsValid(e.target.closest('form').checkValidity()));
    };

    const handleButtonClick = () => {
        navigate('/signin');
    };

    return (
        <section className='password-recovery'>
            <img
                className='password-recovery__logo'
                src={nisoLogo}
                alt='логотип НИСО'
            ></img>
            <p className='password-recovery__title'>
                Введите свой email адрес для восстановления пароля
            </p>
            <AuthForm
                onSubmit={e => {
                    e.preventDefault();
                    // dispatch(setOpenStatus(true));
                    // dispatch(
                    //     updateStatusText(
                    //         'На ваш emai'
                    //     )
                    // );
                    // dispatch(updateStatusCode('500'));
                    navigate('/signin/password-recovery/generated-link');
                }}
                isValid={isValid}
                submitButtonText='Восстановить'
            >
                <label className='auth-form__label' htmlFor='email'>
                    E-mail
                </label>
                <input
                    className={`auth-form__input ${
                        emailError ? 'auth-form__input-invalid' : ''
                    }`}
                    onChange={handleChange}
                    value={email}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Введите email'
                    required
                />
                <span className='auth-form__error'>{emailError}</span>
            </AuthForm>
            <button
                className='password-recovery__button'
                onClick={handleButtonClick}
            >
                Войти
            </button>
        </section>
    );
};

export default PasswordRecovery;
