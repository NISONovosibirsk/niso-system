import { SavedFormsItem } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedFormsList.scss';

const SavedFormsList = () => {
    const { savedForms } = useTypeSelector(state => state.form);

    return (
        <ul className='saved-forms-list'>
        {savedForms.map((item, index) => (
            <SavedFormsItem key={index} index={index} item={item} />
        ))}
    </ul>
    );
};

export default SavedFormsList;
