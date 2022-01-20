import React, { useState } from 'react';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <header className='header'>
      <button
        onClick={handleBurgerButtonClick}
        className='header__burger-btn'
      ></button>
      <img src='#' alt='logo' className='header__logo' />
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
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
