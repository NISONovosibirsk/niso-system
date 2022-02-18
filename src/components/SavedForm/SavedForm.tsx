import { useDispatch } from 'react-redux';
import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { setCurrentForm } from '../../store/actions/formActions';
import './SavedForm.scss';

const SavedForm = () => {
    const { currentForm } = useTypeSelector(state => state.form);
    const dispatch = useDispatch();

    const handleValueChange = (e, index) => {
        const { type, id, checked, value } = e.target;

        const newState = [...currentForm];

        switch (type) {
            case 'radio':
                const newRadiolist = [...newState[index].radiolist];

                newRadiolist.forEach(radio => (radio.isChecked = false));
                newRadiolist[id].isChecked = true;
                newState[index].radiolist = newRadiolist;
                break;

            case 'checkbox':
                newState[index].value = checked;
                break;

            default:
                newState[index].value = value;
                break;
        }
        dispatch(setCurrentForm(newState));
    };

    return (
        <form className='saved-form'>
            {currentForm.map((item, index) =>
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
