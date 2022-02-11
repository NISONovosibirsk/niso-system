import { Button } from '..';
import './SavedFormsItem.scss';
import { ISavedFormItem } from '../../interfaces';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getSavedForms } from '../../store/actions/formActions';
import { useDispatch } from 'react-redux';

const SavedFormsItem = ({ index, item }: ISavedFormItem) => {
    const { savedForms } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleEdit = () => {
        console.log('EDIT');
    };

    const handleRemove = () => {
        localStorage.removeItem(String(item._id));
        const newState = Array.from(savedForms);
        newState.splice(index, 1);
        dispatch(getSavedForms(newState));
    };

    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                item.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${item.subtitle}  |  дата создания: ${item.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button title='Редактировать' type='filled' onClick={handleEdit} />
            <Button title='Удалить' type='filled' onClick={handleRemove} />
            <Button title='Отправить' type='filled' />
        </li>
    );
};

export default SavedFormsItem;
