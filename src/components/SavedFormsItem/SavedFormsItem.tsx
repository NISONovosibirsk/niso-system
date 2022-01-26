import { Button } from '..';
import './SavedFormsItem.scss';

const SavedFormsItem = ({
    index,
    item,
}: {
    index: number;
    item: {
        title: string;
        subtitle: string;
        date: string;
    };
}) => {
    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                item.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${item.subtitle}  |  дата ${item.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button title='Редактировать' type='filled' />
            <Button title='Удалить' type='filled' />
            <Button title='Отправить' type='filled' />
        </li>
    );
};

export default SavedFormsItem;
