import React from 'react';
import './CustomForm.scss';

const CustomForm = () => {
  return (
    <form className='custom-form'>
      <input placeholder='Введите заголовок' className='custom-form__title' />
      <input
        placeholder='Введите название формы'
        className='custom-form__form-title'
      />
      <textarea
        placeholder='Введите подзаголовок формы'
        rows={3}
        className='custom-form__form-subtitle'
      />
      <div className='custom-form__field'></div>
    </form>
  );
};

export default CustomForm;
