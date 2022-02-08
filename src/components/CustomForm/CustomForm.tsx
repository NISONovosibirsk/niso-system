import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement } from '..';
import { Droppable } from 'react-beautiful-dnd';

const CustomForm = () => {
    const { constructor } = useTypeSelector(state => state.form);

    // save form handler
    const handleSave = e => {
        e.preventDefault();
        const id = String(Date.now())
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
