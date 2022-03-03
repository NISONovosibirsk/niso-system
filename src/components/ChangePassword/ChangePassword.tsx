import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { AuthForm } from '..';
import { nisoLogo } from '../../assets';
import './ChangePassword.scss';
import {
    resetForm,
    setIsValid,
    updatePasswordErrorMessage,
    updatePasswordValue,
    updateRepeatPasswordErrorMessage,
    updateRepeatPasswordValue,
} from '../../store/actions/changePasswordActions';

const ChangePassword = () => {
    const {
        password,
        passwordError,
        repeatPassword,
        repeatPasswordError,
        isValid,
    } = useTypeSelector(state => state.changePassword);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, validationMessage } = e.target;

        switch (name) {
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

    const handleButtonClick = () => {
        dispatch(resetForm());
        navigate('/signin');
    };

    return (
        <section className='change-password'>
            <img
                className='change-password__logo'
                src={nisoLogo}
                alt='логотип НИСО'
            ></img>
            <p className='change-password__title'>Введите новый пароль</p>
            <AuthForm
                onSubmit={() => {}}
                isValid={isValid}
                submitButtonText='Изменить'
            >
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
            <button
                className='change-password__button'
                onClick={handleButtonClick}
            >
                Войти
            </button>
        </section>
    );
};

export default ChangePassword;
