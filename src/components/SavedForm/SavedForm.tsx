import { useDispatch } from 'react-redux';
import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { setOpenedForm } from '../../store/actions/formsListActions';
import './SavedForm.scss';

const SavedForm = () => {
    const { openedForm, forms } = useTypeSelector(state => state.formsList);
    const { selectedForm } = useTypeSelector(state => state.sendForm);
    const dispatch = useDispatch();

    const handleSend = e => {
        e.preventDefault();
        localStorage.removeItem(openedForm._id);
        const newForms = [...forms]
            .splice(forms.indexOf(openedForm), 1)
            .push(openedForm);

        dispatch(setOpenedForm(newForms));
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
        // console.log(newOpenedForm.content === selectedForm.content);
        dispatch(setOpenedForm(newOpenedForm));
    };

    return (
        <form className='saved-form'>
            {openedForm.content.map((element, index) =>
                savedFormTypeHandler({
                    onValueChange: e => {
                        handleValueChange(e, index);
                    },
                    element,
                    isFinalForm: true,
                })
            )}

            <Button title='Сдать' onClick={handleSend} />
        </form>
    );
};

export default SavedForm;
