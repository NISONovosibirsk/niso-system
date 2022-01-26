import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { FormElement } from '..';

//drop action import
import { dropElement } from '../../store/actions/dragAndDrop';
import { useDispatch } from 'react-redux';
import {
    changeCustomInputsValues,
    changeFormSubtitle,
    changeFormTitle,
    changeTitle,
} from '../../store/actions/customForm';

const CustomForm = () => {
    const { constructor, currentElement } = useTypeSelector(
        state => state.dragAndDrop
    );
    const dispatch = useDispatch();

    const dropHandler = (e: any) => {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
        dispatch(dropElement(currentElement));
    };

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

    const handleChangeCustomInputsValue = (
        id: number,
        value: {
            label: string;
            input: string;
        }
    ) => {
        dispatch(changeCustomInputsValues({ id, value }));
    };

    return (
        <form
            className='custom-form'
            onDrop={e => {
                dropHandler(e);
            }}
            onDragOver={e => {
                e.preventDefault();
            }}
        >
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
            <div className='custom-form__field'>
                {constructor.map((item: any, index: number) => (
                    <FormElement
                        id={index}
                        title={item.title}
                        type={item.type}
                        isDisabled={false}
                        onChange={handleChangeCustomInputsValue}
                        key={index}
                        item={item}
                        dragNdrop={() => {}}
                    />
                ))}
            </div>
        </form>
    );
};

export default CustomForm;
