import React, { useState } from 'react';
import './FormElement.scss';

const FormElement = ({
  id,
  title,
  type,
  isDisabled,
  onChange,
}: {
  id: any;
  title: string;
  type: string;
  isDisabled: boolean;
  onChange: Function;
}) => {
  const [value, setValue] = useState({ label: title, input: '' });
  const handleChange = (e: any) => {
    const { target } = e;
    const { id } = target.parentNode;

    setValue({ ...value, [target.name]: target.value });
    onChange(id, value);
  };

  return (
    <div id={id} className='form-element'>
      <input
        onChange={handleChange}
        value={value.label}
        name='label'
        className='form-element__input form-element__input_type_label'
        disabled={isDisabled}
      />
      <input
        onChange={handleChange}
        value={value.input}
        name='input'
        type={type}
        className='form-element__input'
        disabled={isDisabled}
      />
    </div>
  );
};

export default FormElement;
