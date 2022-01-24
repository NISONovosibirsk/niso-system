import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import FormElement from '../FormElement/FormElement';

const CustomForm = () => {
    const { elements, constructor } = useTypeSelector(state => state.form);

    return (
        <form className='custom-form'>
            <input
                placeholder='Введите заголовок'
                className='custom-form__title'
            />
            <input
                placeholder='Введите название формы'
                className='custom-form__form-title'
            />
            <textarea
                placeholder='Введите подзаголовок формы'
                rows={3}
                className='custom-form__form-subtitle'
            />
            <div className='custom-form__field'>
                {constructor.map((item: any) => 
                    <FormElement
                        id={item.id}
                        title={item.title}
                        type={item.type}
                        isDisabled={item.isDisabled}
                        onChange={() => {}}
                        key={item.id}
                    />
                )}
            </div>
        </form>
    );
};

export default CustomForm;
