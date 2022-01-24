import React from 'react';
import FormElement from '../FormElement/FormElement';
import './FormElements.scss';

const FormElements = () => {
  return <div className='form-elements'>
    <h2 className='form-elements__title'>Элементы конструктора</h2>
    <div className='form-elements__field'>
      <FormElement isDisabled={true} />
      <FormElement isDisabled={true} />
      <FormElement isDisabled={true} />
      <FormElement isDisabled={true} />
      <FormElement isDisabled={true} />
    </div>
  </div>;
};

export default FormElements;
