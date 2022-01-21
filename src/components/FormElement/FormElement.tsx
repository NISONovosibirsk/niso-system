import React from 'react';
import './FormElement.scss';

const FormElement = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <div className='form-element'>
      <input
        value='Текстовое поле input'
        className='form-element__input form-element__input_type_label'
        disabled={isDisabled}
      />
      <input name='' className='form-element__input' disabled={isDisabled} />
    </div>
  );
};

export default FormElement;
