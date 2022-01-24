import React, { useState } from 'react';
import FormElement from '../FormElement/FormElement';
import './FormElements.scss';

const FormElements = () => {
  const [value, setValue] = useState({});

  const handleChange = (
    id: number,
    inputValue: { label: string; input: string }
  ) => {
    setValue({ ...value, [id]: inputValue });
    console.log(value);
  };

  return (
    <div className='form-elements'>
      <h2 className='form-elements__title'>Элементы конструктора</h2>
      <div className='form-elements__field'>
        <FormElement
          id={0}
          title='Текстовое поле input'
          type='text'
          isDisabled={false}
          onChange={handleChange}
        />
        <FormElement
          id={1}
          title='Числовое поле input'
          type='number'
          isDisabled={false}
          onChange={handleChange}
        />
        <FormElement
          id={2}
          title='E-mail input'
          type='email'
          isDisabled={false}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormElements;
