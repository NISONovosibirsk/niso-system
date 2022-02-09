import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement, Item } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSavedForms } from '../../store/actions/formActions';

const CustomForm = () => {
    useEffect(() => {
        const newState = {};
        Object.keys(localStorage).map(key => {
            const json = localStorage.getItem(key);

            if (json !== null) {
                // console.log(JSON.parse(json));
                const form = JSON.parse(json);
                newState[key] = form;
            }

            dispatch(getSavedForms(newState));
        });
    }, []);

    const dispatch = useDispatch();
    const { constructor } = useTypeSelector(state => state.form);

    // save form handler
    const handleSave = e => {
        e.preventDefault();
        const id = String(Date.now());
        localStorage.setItem(id, JSON.stringify(constructor));
    };

    return (
        <Droppable droppableId={'customForm'}>
            {provided => (
                <form
                    className='custom-form'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <div className='custom-form__field'>
                        {constructor.length ? (
                            constructor.map((item: any, index: number) => (
                                <FormElement
                                    item={item}
                                    id={item.id}
                                    index={index}
                                    key={item.id}
                                />
                            ))
                        ) : (
                            <p className='custom-form__form-placeholder'>
                                Перетащите сюда нужное поле
                            </p>
                        )}
                    </div>
                    {constructor.length ? (
                        <Button title='Сохранить форму' onClick={handleSave} />
                    ) : null}
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
