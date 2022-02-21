import { Button, ExportExcel, RemoveButton } from '..';
import './SavedFormsItem.scss';
import { ISavedFormItem } from '../../interfaces';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { updateAddedElements } from '../../store/actions/formConstructorActions';
import { useDispatch } from 'react-redux';
import {
    setOpenStatus,
    setSelectedForm,
} from '../../store/actions/sendFormPopupActions';
import { setForms } from '../../store/actions/formsListActions';

const SavedFormsItem = ({ index, savedForm }: ISavedFormItem) => {
    const { forms } = useTypeSelector(state => state.formsList);
    const dispatch = useDispatch();

    const handleEdit = () => {
        const newAddedElements = [...forms[index].content];
        dispatch(updateAddedElements(newAddedElements));
    };

    const handleRemove = () => {
        localStorage.removeItem(String(savedForm._id));
        const newForms = [...forms];
        newForms.splice(index, 1);
        dispatch(setForms(newForms));
    };

    const handleSend = () => {
        const newSelectedForm = [...forms[index].content];
        dispatch(setOpenStatus(true));
        dispatch(setSelectedForm(newSelectedForm));
    };

    return (
        <li className='saved-forms-item'>
            <h2 className='saved-forms-item__title'>{`${index + 1}   ${
                savedForm.title
            }`}</h2>
            <p className='saved-forms-item__subtitle'>{`${savedForm.subtitle}  |  дата создания: ${savedForm.date}`}</p>
            <p className='saved-forms-item__status'>сдан</p>
            <Button
                title='Редактировать'
                types={['filled']}
                onClick={handleEdit}
            />
            <Button title='Отправить' types={['filled']} onClick={handleSend} />
            <ExportExcel savedForm={savedForm} />
            <RemoveButton onClick={handleRemove} type='saved-forms' />
        </li>
    );
};

export default SavedFormsItem;
