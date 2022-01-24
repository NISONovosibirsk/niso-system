import React from 'react';
import CustomForm from '../CustomForm/CustomForm';
import FormElements from '../FormElements/FormElements';
import './FormConstructor.scss';

const FormConstructor = () => {

    return (
        <section className='form-constructor'>
            <FormElements />
            <CustomForm />
        </section>
    );
};

export default FormConstructor;
