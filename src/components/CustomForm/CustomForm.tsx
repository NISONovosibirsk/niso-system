import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSavedForms } from '../../store/actions/formActions';

const CustomForm = () => {
    // temporary states must be removed to redux
    const [isPreview, setIsPreview] = useState(false);

    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    useEffect(() => {
        handleStorage();
    }, []);

    // convert timestamp to human time
    const handleTime = key => {
        const date = new Date(Number(key));
        return `${date.getDate()}.0${
            date.getMonth() + 1
        }.${date.getFullYear()}`;
    };

    // save element to storage by button
    const handleSave = e => {
        e.preventDefault();
        const isValid = e.target.closest('form').checkValidity();
        const key = String(Date.now());
        isValid && localStorage.setItem(key, JSON.stringify(constructor));
        handleStorage();
    };

    // add elements from storage to state
    const handleStorage: any = () => {
        const newState: any[] = [];
        Object.keys(localStorage).map(key => {
            const json = localStorage.getItem(key);
            if (json !== null) {
                const form: any = {};
                form.date = handleTime(key);
                form.content = JSON.parse(json);
                form._id = Number(key);

                form.content.find(item => {
                    switch (item.type) {
                        case 'title':
                            form.title = item.placeholder;
                            break;
                        case 'header':
                            form.subtitle = item.placeholder;
                            break;
                        default:
                            break;
                    }
                });

                newState.push(form);
            }

            dispatch(getSavedForms(newState));
        });
    };

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
                    {constructor.length &&
                        (isPreview ? (
                            <Button
                                title='Показать конструктор'
                                onClick={handleHidePreview}
                            />
                        ) : (
                            <Button
                                title='Показать результат'
                                onClick={handleShowPreview}
                            />
                        ))}
                    <div className='custom-form__field'>
                        {constructor.length ? (
                            isPreview ? (
                                constructor.map(item =>
                                    savedFormTypeHandler({
                                        onValueChange: () => {},
                                        element: item,
                                        isFinalForm: true,
                                    })
                                )
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
                    {constructor.length && (
                        <Button title='Сохранить форму' onClick={handleSave} />
                    )}
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
