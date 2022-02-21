import { useDispatch } from 'react-redux';
import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { setOpenedForm } from '../../store/actions/formsListActions';
import './SavedForm.scss';

const SavedForm = () => {
    const { openedForm } = useTypeSelector(state => state.formsList);
    const dispatch = useDispatch();

    const handleValueChange = (e, index) => {
        const { type, id, checked, value } = e.target;

        const newOpenedForm = [...openedForm];

        switch (type) {
            case 'radio':
                const newRadiolist = [...newOpenedForm[index].radiolist];

                newRadiolist.forEach(radio => (radio.isChecked = false));
                newRadiolist[id].isChecked = true;
                newOpenedForm[index].radiolist = newRadiolist;
                break;

            case 'checkbox':
                newOpenedForm[index].value = checked;
                break;

            default:
                newOpenedForm[index].value = value;
                break;
        }
        dispatch(setOpenedForm(newOpenedForm));
    };

    return (
        <form className='saved-form'>
            {openedForm.map((item, index) =>
                savedFormTypeHandler({
                    onValueChange: e => {
                        handleValueChange(e, index);
                    },
                    element: item,
                    isFinalForm: true,
                })
            )}

            <Button title='Отправить' />
        </form>
    );
};

export default SavedForm;
