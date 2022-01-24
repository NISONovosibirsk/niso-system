import React, { useState } from 'react';
import FormElement from '../FormElement/FormElement';
import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const FormElements = () => {
    const [value, setValue] = useState({});

    const handleChange = (
        id: number,
        inputValue: { label: string; input: string }
    ) => {
        setValue({ ...value, [id]: inputValue });
        console.log(value);
    };

    const { elements, constructor } = useTypeSelector(state => state.form);

    return (
        <div className='form-elements'>
            <h2 className='form-elements__title'>Элементы конструктора</h2>
            <div className='form-elements__field'>
                {elements.map((item: any) => (
                    <FormElement
                        id={item.id}
                        title={item.title}
                        type={item.type}
                        isDisabled={item.isDisabled}
                        onChange={() => {}}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormElements;
