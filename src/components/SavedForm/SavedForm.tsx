import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import './SavedForm.scss';

const SavedForm = () => {
    const { constructor } = useTypeSelector(state => state.form);
    return (
        <form className='saved-form'>
            {savedFormTypeHandler(constructor)}

            <Button title='Отправить' />
        </form>
    );
};

export default SavedForm;
