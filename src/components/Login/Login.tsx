import { nisoLogo } from '../../assets';
import './Login.scss';

const Login = () => {
    return (
        <section className='login'>
            <img
                className='login__logo'
                src={nisoLogo}
                alt='логотип НИСО'
            ></img>
            <form className='login__form'>
                <label className='login__label' htmlFor='email'>
                    E-mail
                </label>
                <input
                    className='login__input'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Введите email'
                />
                <span className='login__error'>ошибка 123</span>
                <label className='login__label' htmlFor='password'>
                    Пароль
                </label>
                <input
                    className='login__input'
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Введите пароль'
                />
                <span className='login__error'>ошибка 123</span>
                <p className='login__button-forgot'>Забыли пароль?</p>
                <button className='login__button-submit'>Войти</button>
            </form>
        </section>
    );
};

export default Login;
