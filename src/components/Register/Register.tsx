import React from 'react';
import './Register.scss';
import Form from '../Form/Form';

const Register = () => {
  return (
    <section className='register'>
      <h1 className='register__title'>Авторизация</h1>
      <p className='register__subtitle'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <Form title='Создание аккаунта'>
        <input placeholder='Имя' className='form__input'></input>
        <input placeholder='Фамилия' className='form__input'></input>
        <input
          placeholder='Email address'
          className='form__input form__input_type_large'
        ></input>
        <input
          placeholder='Create password'
          className='form__input form__input_type_large'
        ></input>
      </Form>
    </section>
  );
};

export default Register;
