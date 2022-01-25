import { useState } from 'react';
import { FormElement } from '..';
import './FormElements.scss';
import { useTypeSelector } from '../../hooks/useTypeSelector';

//import action to take element
import { takeElement } from '../../store/action-creators/form';
import { useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

    //dispatching graggin' item to redux
    const dragStartHandler = (item: any) => {
        console.log('drag started!');
        // e.preventDefault();
        takeElement(dispatch, item);
    };

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
                        item={item}
                        dragNdrop={dragStartHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormElements;
