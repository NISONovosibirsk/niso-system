import './ReportsFormsItem.scss';
import { ISavedFormItem } from '../../../../interfaces';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../../store/actions/formConstructorActions';
import { useDispatch } from 'react-redux';
import {
    setOpenStatus,
    setSelectedForm,
} from '../../../../store/actions/sendFormPopupActions';
import { setForms } from '../../../../store/actions/reportsFormsListActions';
import { Button, CrossButton, ExportExcel } from '../../../support';

const ReportFormItem = ({ index, reportForm }: ISavedFormItem) => {
    const { forms } = useTypeSelector(state => state.reportsFormsList);
    const dispatch = useDispatch();

    const handleEdit = () => {
        const newAddedElements = [...forms[index].content];
        dispatch(updateAddedElements(newAddedElements));
    };

    const handleRemove = () => {
        localStorage.removeItem(String(reportForm._id));
        const newForms = [...forms];
        newForms.splice(index, 1);
        dispatch(setForms(newForms));
    };

    const handleSend = () => {
        const newSelectedForm = { ...forms[index] };
        dispatch(setOpenStatus(true));
        dispatch(setSelectedForm(newSelectedForm));
    };

    return (
        <li className='reports-forms-item'>
            <h2 className='reports-forms-item__title'>{`${index + 1}   ${
                reportForm.title
            }`}</h2>
            <p className='reports-forms-item__subtitle'>{`${reportForm.subtitle}  |  дата создания: ${reportForm.date}`}</p>
            <p className='reports-forms-item__status'>сдан</p>
            <Button title='Редактировать' onClick={handleEdit} width='90%' />
            <Button title='Отправить' onClick={handleSend} width='90%' />
            <ExportExcel savedForm={reportForm} />
            <CrossButton onClick={handleRemove} type='reports-forms-item' />
        </li>
    );
};

export default ReportFormItem;
