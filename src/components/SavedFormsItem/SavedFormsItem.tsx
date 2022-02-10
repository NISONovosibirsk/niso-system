import { Button } from '..';
import './SavedFormsItem.scss';
import { ISavedFormItem } from '../../interfaces';

const SavedFormsItem = ({ index, item }: ISavedFormItem) => {
    const handleEdit = () => {
        console.log('EDIT');
    };

    const handleRemove = () => {
        console.log('REMOVE');
    };

    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                item.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${item.subtitle}  |  дата создания: ${item.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button title='Редактировать' type='filled' onClick={handleEdit} />
            <Button title='Удалить' type='filled' />
            <Button title='Отправить' type='filled' />
        </li>
    );
};

export default SavedFormsItem;
