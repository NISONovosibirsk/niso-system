import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { MaisLogo } from '../../../assets/';
import './Login.scss';
import {
    resetForm,
    setIsValid,
    updateEmailErrorMessage,
    updateEmailValue,
    updatePasswordErrorMessage,
    updatePasswordValue,
} from '../../../store/actions/loginActions';
import { AuthForm } from '../../support';

const Login = () => {
    const { email, emailError, password, passwordError, isValid } =
        useTypeSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, validationMessage } = e.target;

        switch (name) {
            case 'email':
                dispatch(updateEmailValue(value));
                dispatch(updateEmailErrorMessage(validationMessage));
                break;

            case 'password':
                dispatch(updatePasswordValue(value));
                dispatch(updatePasswordErrorMessage(validationMessage));
                break;

            default:
                break;
        }

        dispatch(setIsValid(e.target.closest('form').checkValidity()));
    };

    const handleForgotPassword = () => {
        navigate('/signin/password-recovery');
    };

    const handleQuestionClick = () => {
        dispatch(resetForm());
        navigate('/signup');
    };

    return (
        <section className='login'>
            <MaisLogo className='login__logo' />
            <AuthForm
                onSubmit={() => {}}
                isValid={isValid}
                submitButtonText='Войти'
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
                <label className='auth-form__label' htmlFor='password'>
                    Пароль
                </label>
                <input
                    className={`auth-form__input ${
                        passwordError ? 'auth-form__input-invalid' : ''
                    }`}
                    onChange={handleChange}
                    value={password}
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Введите пароль'
                    required
                />
                <span className='auth-form__error'>{passwordError}</span>
                <p
                    className='login__forgot-question'
                    onClick={handleForgotPassword}
                >
                    Забыли пароль?
                </p>
            </AuthForm>
            <p className='login__question'>
                У вас нет учетной записи?
                <span
                    className='login__question-span'
                    onClick={handleQuestionClick}
                >
                    Регистрация
                </span>
            </p>
        </section>
    );
};

export default Login;
