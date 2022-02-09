import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { Button, FormElement, Item } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSavedForms } from '../../store/actions/formActions';

const CustomForm = () => {
    useEffect(() => {
        handleStorage();
    }, []);

    const handleSave = e => {
        e.preventDefault();
        const key = String(Date.now());
        localStorage.setItem(key, JSON.stringify(constructor));

        handleStorage();
    };

    console.log(new Date(Number('1644399551389')))

    // convert timestamp to human time
    const handleTime = (key) => {
        const date = new Date(Number(key));

        return `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`
    }

    const handleStorage = () => {
        const newState: any[] = [];
        Object.keys(localStorage).map(key => {
            const json = localStorage.getItem(key);
            if (json !== null) {
                const form: any = {};

                form.title = 'test title';
                form.description = 'test description';
                form.date = handleTime(key);
                form.content = JSON.parse(json);
                newState.push(form);
            }

            dispatch(getSavedForms(newState));
        });
    };

    const dispatch = useDispatch();
    const { constructor } = useTypeSelector(state => state.form);

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
