import { Button, ExportExcel, RemoveButton } from '..';
import './SavedFormsItem.scss';
import { ISavedFormItem } from '../../interfaces';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {
    getSavedForms,
    updateStatus,
    updateAddedElements,
} from '../../store/actions/constructorActions';
import { useDispatch } from 'react-redux';

const SavedFormsItem = ({ index, savedForm }: ISavedFormItem) => {
    const { savedForms, isActive } = useTypeSelector(
        state => state.constructor
    );
    const dispatch = useDispatch();

    const handleEdit = () => {
        const newState = [...savedForms[index].content];
        dispatch(updateAddedElements(newState));
    };

    const handleRemove = () => {
        localStorage.removeItem(String(savedForm._id));
        const newState = [...savedForms];
        newState.splice(index, 1);
        dispatch(getSavedForms(newState));
    };

    const handleSend = () => {
        const newState = { ...isActive };
        newState.searchModal = true;
        dispatch(updateStatus(newState));
    };

    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                savedForm.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${savedForm.subtitle}  |  дата создания: ${savedForm.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button title='Редактировать' mod='filled' onClick={handleEdit} />
            <Button title='Отправить' mod='filled' onClick={handleSend} />
            <ExportExcel savedForm={savedForm} />
            <RemoveButton onClick={handleRemove} type='saved-forms' />
        </li>
    );
};

export default SavedFormsItem;
