import { SavedFormsItem } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedFormsList.scss';

const SavedFormsList = () => {
    const { forms } = useTypeSelector(state => state.formsList);

    return (
        <ul className='saved-forms-list'>
            {forms.map((savedForm, index) => (
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
