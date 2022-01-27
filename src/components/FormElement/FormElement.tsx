import { useState } from 'react';
import './FormElement.scss';

const FormElement = ({
    id,
    title,
    type,
    isDisabled,
    onChange,
    drag,
    drop,
    item,
}: {
    id: any;
    title: string;
    type: string;
    isDisabled: boolean;
    onChange: Function;
    drag: Function;
    drop: Function;
    item: any;
}) => {
    const [value, setValue] = useState({ label: title, input: '' });
    item.id = id;

    const handleChange = (e: any) => {
        const { target } = e;
        const { id } = target.parentNode;

        setValue({ ...value, [target.name]: target.value });
        onChange(id, value);
    };

    //drag'n'drop box-shadow handlers
    const dragOverHandler = (e: any) => {
        e.preventDefault();
        if (e.target.className === 'form-element__input') {
            e.target.style.boxShadow = '0 2px 3px black';
        }
    };

    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    };

    return (
        <div
            id={item.id}
            className='form-element'
            draggable={true}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragStart={() => drag(item)}
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
