import React from 'react';
import { Button } from '..';
import './Form.scss';
import { IForm } from '../../interfaces';

const Form = ({ title, onSubmit, children }: IForm) => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h2 className='form__title'>{title}</h2>
            {children}
            <Button title='Зарегистрироваться' types={['filled']}></Button>
        </form>
    );
};

export default Form;
