import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

const Form = ({
  title,
  onSubmit,
  children,
}: {
  title: string;
  onSubmit?: any;
  children: any;
}) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2 className='form__title'>{title}</h2>
      {children}
      <Button title='Зарегистрироваться' type='filled'></Button>
    </form>
  );
};

export default Form;
