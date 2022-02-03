import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { FormElement } from '..';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import {
    changeFormSubtitle,
    changeFormTitle,
    changeTitle,
} from '../../store/actions/customForm';

const CustomForm = () => {
    const { constructor } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleChangeInputsValue = (e: any) => {
        const { name, value } = e.target;

        switch (name) {
            case 'title':
                dispatch(changeTitle(value));
                break;
            case 'formTitle':
                dispatch(changeFormTitle(value));
                break;
            case 'formSubtitle':
                dispatch(changeFormSubtitle(value));
                break;
        }
    };

    return (
        <Droppable droppableId={'customForm'}>
            {provided => (
                <form className='custom-form'>
                    <input
                        onChange={handleChangeInputsValue}
                        name='title'
                        placeholder='Введите заголовок'
                        className='custom-form__title'
                    />
                    <input
                        onChange={handleChangeInputsValue}
                        name='formTitle'
                        placeholder='Введите название формы'
                        className='custom-form__form-title'
                    />
                    <textarea
                        onChange={handleChangeInputsValue}
                        name='formSubtitle'
                        placeholder='Введите подзаголовок формы'
                        rows={3}
                        className='custom-form__form-subtitle'
                    />
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='custom-form__field'
                    >
                        {constructor.map((item: any, index: number) => (
                            <FormElement
                                item={item}
                                id={item.id}
                                index={index}
                                key={item.id}
                            />
                        ))}
                    </div>
                    {provided.placeholder}
                </form>
            )}
        </Droppable>
    );
};

export default CustomForm;
