import { useTypeSelector } from '../../hooks/useTypeSelector';
import './CustomForm.scss';
import { FormElement } from '..';

//drop action import
import { dropElement } from '../../store/action-creators/form';
import { useDispatch } from 'react-redux';

const CustomForm = () => {
    const { constructor, currentElem } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const dropHandler = (e: any) => {
        e.preventDefault();
        e.target.style.boxShadow = 'none';
        dropElement(dispatch, currentElem);
    };

    return (
        <form className='custom-form'>
            <input
                placeholder='Введите заголовок'
                className='custom-form__title'
            />
            <input
                placeholder='Введите название формы'
                className='custom-form__form-title'
            />
            <textarea
                placeholder='Введите подзаголовок формы'
                rows={3}
                className='custom-form__form-subtitle'
            />
            <div className='custom-form__field'>
                {constructor.map((item: any) => (
                    <FormElement
                        id={item.id}
                        title={item.title}
                        type={item.type}
                        isDisabled={item.isDisabled}
                        onChange={() => {}}
                        key={item.id}
                        item={item}
                        dragNdrop={dropHandler}
                    />
                ))}
            </div>
        </form>
    );
};

export default CustomForm;
