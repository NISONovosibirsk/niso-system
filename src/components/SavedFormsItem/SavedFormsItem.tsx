import { Button, RemoveButton } from '..';
import './SavedFormsItem.scss';
import { ISavedFormItem } from '../../interfaces';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {
    getSavedForms,
    setCurrentForm,
    updateConstructor,
} from '../../store/actions/formActions';
import { useDispatch } from 'react-redux';

const SavedFormsItem = ({ index, item }: ISavedFormItem) => {
    const { savedForms } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleEdit = () => {
        const newState = Array.from(savedForms[index].content);
        dispatch(updateConstructor(newState));
    };

    const handleRemove = () => {
        localStorage.removeItem(String(item._id));
        const newState = Array.from(savedForms);
        newState.splice(index, 1);
        dispatch(getSavedForms(newState));
    };

    const handleSend = () => {
        const newState = Array.from(savedForms[index].content);
        dispatch(setCurrentForm(newState));
    };

    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                item.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${item.subtitle}  |  дата создания: ${item.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button title='Редактировать' mod='filled' onClick={handleEdit} />
            <Button title='Отправить' mod='filled' onClick={handleSend} />
            <RemoveButton onClick={handleRemove} type='saved-forms' />
        </li>
    );
};

export default SavedFormsItem;
