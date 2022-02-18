import { SavedFormsItem } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedFormsList.scss';

const SavedFormsList = () => {
    const { savedForms } = useTypeSelector(state => state.formConstructor);

    return (
        <ul className='saved-forms-list'>
            {savedForms.map((savedForm, index) => (
                <SavedFormsItem
                    key={index}
                    index={index}
                    savedForm={savedForm}
                />
            ))}
        </ul>
    );
};

export default SavedFormsList;
