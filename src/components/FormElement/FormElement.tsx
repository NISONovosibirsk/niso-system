import { useState } from 'react';
import './FormElement.scss';
import { Draggable } from 'react-beautiful-dnd';

const FormElement = ({
    id,
    title,
    type,
    isDisabled,
    onChange,
    item,
    index,
}: {
    id: any;
    title: string;
    type: string;
    isDisabled: boolean;
    onChange: Function;
    item: any;
    index: number;
}) => {
    const [value, setValue] = useState({ label: title, input: '' });
    item.id = id;

    const handleChange = (e: any) => {
        const { target } = e;
        const { id } = target.parentNode;

        setValue({ ...value, [target.name]: target.value });
        onChange(id, value);
    };

    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div id={item.id} className='form-element'>
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
                </div>
            )}
        </Draggable>
    );
};

export default FormElement;
