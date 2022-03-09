import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { AuthForm } from '../../support';
import { blueNisoLogo } from '../../../assets';
import './Register.scss';
import {
    resetForm,
    setIsValid,
    updateEmailErrorMessage,
    updateEmailValue,
    updatePasswordErrorMessage,
    updatePasswordValue,
    updateRepeatPasswordErrorMessage,
    updateRepeatPasswordValue,
} from '../../../store/actions/registerActions';

const Register = () => {
    const {
        email,
        emailError,
        password,
        passwordError,
        repeatPassword,
        repeatPasswordError,
        isValid,
    } = useTypeSelector(state => state.register);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, validationMessage } = e.target;

        switch (name) {
            case 'email':
                dispatch(updateEmailValue(value));
                dispatch(updateEmailErrorMessage(validationMessage));
                dispatch(
                    setIsValid(
                        e.target.closest('form').checkValidity()
                            ? repeatPassword === password
                                ? true
                                : false
                            : false
                    )
                );
                break;

            case 'password':
                dispatch(updatePasswordValue(value));
                dispatch(updatePasswordErrorMessage(validationMessage));
                dispatch(
                    updateRepeatPasswordErrorMessage(
                        repeatPassword === value
                            ? ''
                            : 'Пароли должны совпадать.'
                    )
                );
                dispatch(
                    setIsValid(
                        e.target.closest('form').checkValidity()
                            ? repeatPassword === value
                                ? true
                                : false
                            : false
                    )
                );
                break;

            case 'repeatPassword':
                dispatch(updateRepeatPasswordValue(value));
                dispatch(
                    updateRepeatPasswordErrorMessage(
                        password === value ? '' : 'Пароли должны совпадать.'
                    )
                );
                dispatch(
                    setIsValid(
                        e.target.closest('form').checkValidity()
                            ? password === value
                                ? true
                                : false
                            : false
                    )
                );
                break;

            default:
                break;
        }
    };

    const handleQuestionClick = () => {
        dispatch(resetForm());
        navigate('/signin');
    };

    return (
        <section className='register'>
            <img
                className='register__logo'
                src={blueNisoLogo}
                alt='логотип НИСО'
            ></img>
            <AuthForm
                onSubmit={() => {}}
                isValid={isValid}
                submitButtonText='Зарегистрироваться'
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
                <label className='auth-form__label' htmlFor='repeatPassword'>
                    Подтверждение пароля
                </label>
                <input
                    className={`auth-form__input ${
                        repeatPasswordError ? 'auth-form__input-invalid' : ''
                    }`}
                    onChange={handleChange}
                    value={repeatPassword}
                    formNoValidate={true}
                    id='repeatPassword'
                    name='repeatPassword'
                    type='password'
                    placeholder='Введите пароль еще раз'
                    required
                />
                <span className='auth-form__error'>{repeatPasswordError}</span>
            </AuthForm>
            <p className='register__question'>
                Уже зарегистрированы?
                <span
                    className='register__question-span'
                    onClick={handleQuestionClick}
                >
                    Войти
                </span>
            </p>
        </section>
    );
};

export default Register;
