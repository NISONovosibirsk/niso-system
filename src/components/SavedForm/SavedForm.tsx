import { Button } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { savedFormTypeHandler } from '../../middleware/savedFormTypeHandler';
import './SavedForm.scss';

const SavedForm = () => {
    const { constructor } = useTypeSelector(state => state.form);
    return (
        <form className='saved-form'>
            {constructor.map(item =>
                savedFormTypeHandler({
                    onValueChange: () => {},
                    element: item,
                    isFinalForm: true,
                })
            )}

            <Button title='Отправить' />
        </form>
    );
};

export default SavedForm;
