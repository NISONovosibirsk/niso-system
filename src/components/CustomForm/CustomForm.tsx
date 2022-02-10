import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';

const CustomForm = () => {
    const [isPreview, setIsPreview] = useState(false);
    const { constructor } = useTypeSelector(state => state.form);

    const handleShowPreview = () => {
        setIsPreview(true);
    };

    const handleHidePreview = () => {
        setIsPreview(false);
    };

    return (
        <Droppable droppableId={'customForm'}>
            {provided => (
                <form
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                    className='custom-form'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {constructor.length ? (
                        isPreview ? (
                            <Button
                                title='Показать конструктор'
                                onClick={handleHidePreview}
                            />
                        ) : (
                            <Button
                                title='Показать результат'
                                onClick={handleShowPreview}
                            />
                        )
                    ) : null}
                    <div className='custom-form__field'>
                        {constructor.length ? (
                            isPreview ? (
                                savedFormTypeHandler(constructor)
                            ) : (
                                constructor.map((item: any, index: number) => (
                                    <FormElement
                                        item={item}
                                        id={item.id}
                                        index={index}
                                        key={item.id}
                                    />
                                ))
                            )
                        ) : (
                            <p className='custom-form__form-placeholder'>
                                Перетащите сюда нужное поле
                            </p>
                        )}
                    </div>
                    {constructor.length ? (
                        <Button title='Сохранить форму' />
                    ) : null}
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
