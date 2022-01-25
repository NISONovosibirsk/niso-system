import { useDispatch } from 'react-redux';
import { Button, Sidebar } from '../';
import { nisoLogo } from '../../assets';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { setLoggedInStatus } from '../../store/action-creators/sidebar';
import './Header.scss';

const Header = () => {
    const isOpen = useTypeSelector(state => state.sidebar.isOpen);
    const dispatch = useDispatch();
    const handleBurgerButtonClick = () => {
        dispatch(setLoggedInStatus(true));
    };

    return (
        <header className='header'>
            <button
                onClick={handleBurgerButtonClick}
                className='header__burger-btn'
            ></button>
            <img src={nisoLogo} alt='logo' className='header__logo' />
            <nav className='header__navigation'>
                <button className='header__link'>система</button>
                <button className='header__link'>документация</button>
                <button className='header__link'>поддержка</button>
                <button className='header__link'>контакты</button>
            </nav>
            <div className='header__buttons-field'>
                <Button title='Войти'></Button>
                <Button title='Регистрация' type='filled'></Button>
            </div>
            <Sidebar isOpen={isOpen} />
        </header>
    );
};

export default Header;
