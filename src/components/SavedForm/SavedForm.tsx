import { useDispatch } from 'react-redux';
import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import { setCurrentForm } from '../../store/actions/formActions';
import './SavedForm.scss';

const SavedForm = () => {
    const { currentForm } = useTypeSelector(state => state.form);
    const dispatch = useDispatch()

    const handleValueChange = (e, index) => {
        const newState: Array<any> = Array.from(currentForm);
        newState[index].value = 
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        dispatch(setCurrentForm(newState));
    };

    return (
        <form className='saved-form'>
            {currentForm.map((item, index) =>
                savedFormTypeHandler({
                    onValueChange: (e) => {handleValueChange(e, index)},
                    element: item,
                    isFinalForm: true,
                })
            )}

            <Button title='Отправить' />
        </form>
    );
};

export default SavedForm;
