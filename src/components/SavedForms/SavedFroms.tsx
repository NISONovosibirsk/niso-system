import { Filter, SavedFormsList } from '..';
import './SavedFroms.scss';

const SavedForms = () => {
    return (
        <section className='saved-forms'>
            <Filter />
            <SavedFormsList />
        </section>
    );
};

export default SavedForms;
