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

    //drag'n'drop handlers
    const dragOverHandler = (e: any) => {
        e.preventDefault();
        if (e.target.className == 'form-element__input') {
            console.log('over!');
            e.target.style.boxShadow = '0 2px 3px black';
        }
    };

    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    const dragStartHandler = (e: any) => {};

    const dropHandler = (e: any) => {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
    };

    return (
        <div
            id={id}
            className='form-element'
            draggable={true}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragStart={e => dragStartHandler(e)}
            onDrop={e => dropHandler(e)}
        >
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
