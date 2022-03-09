import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { AuthForm, Button } from '../../support';
import { blueNisoLogo } from '../../../assets';
import './PasswordRecovery.scss';
import {
    setIsValid,
    updateEmailErrorMessage,
    updateEmailValue,
} from '../../../store/actions/loginActions';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../store/actions/statusPopupActions';

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
                src={blueNisoLogo}
                alt='логотип НИСО'
            ></img>
            <p className='password-recovery__title'>
                Введите свой email адрес для восстановления пароля
            </p>
            <AuthForm
                onSubmit={e => {
                    e.preventDefault();
                    dispatch(setOpenStatus(true));
                    dispatch(updateStatusCode('loader'));

                    setTimeout(() => {
                        dispatch(updateStatusCode('200'));
                        dispatch(
                            updateStatusText(
                                'На ваш email адрес отправлено сообщение для восстановления пароля.'
                            )
                        );
                    }, 2 * 1000);
                    setTimeout(() => {
                        navigate('/signin/password-recovery/generated-link');
                        dispatch(setOpenStatus(false));
                        dispatch(updateStatusText(''));
                        dispatch(updateStatusCode(''));
                    }, 4 * 1000);
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
            <Button
                onClick={handleButtonClick}
                title='Войти'
                margin='16px 0 0'
            />
        </section>
    );
};

export default PasswordRecovery;
