import { useDispatch } from 'react-redux';
import { Button } from '../../support';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { reportFormElementTypeHandler } from '../../../middleware/reportFormElementTypeHandler';
import { setOpenedForm } from '../../../store/actions/reportsFormsListActions';
import './ReportForm.scss';

const ReportForm = () => {
    const { openedForm, forms } = useTypeSelector(
        state => state.reportsFormsList
    );
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        // localStorage.removeItem(openedForm._id);
        // const newForms = [...forms]
        //     .splice(forms.indexOf(openedForm), 1)
        //     .push(openedForm);

        // dispatch(setOpenedForm(newForms));
    };

    const handleValueChange = (e, index) => {
        const { type, id, checked, value } = e.target;

        const newOpenedForm = { ...openedForm };
        const newContent = [...newOpenedForm.content];

        switch (type) {
            case 'radio':
                const newRadiolist = [...newContent[index].radiolist];

                newRadiolist.forEach(radio => (radio.isChecked = false));
                newRadiolist[id].isChecked = true;
                newContent[index].radiolist = newRadiolist;
                break;

            case 'checkbox':
                newContent[index].value = checked;
                break;

            default:
                newContent[index].value = value;
                break;
        }
        newOpenedForm.content = newContent;
        dispatch(setOpenedForm(newOpenedForm));
    };

    return (
        <form className='report-form' onSubmit={handleSubmit}>
            {openedForm.content.map((element, index) =>
                reportFormElementTypeHandler({
                    onValueChange: e => {
                        handleValueChange(e, index);
                    },
                    element,
                    isFinalForm: true,
                })
            )}

            <Button title='Сдать' filled={true} />
        </form>
    );
};

export default ReportForm;
