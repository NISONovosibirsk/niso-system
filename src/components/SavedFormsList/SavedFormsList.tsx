import { SavedFormsItem } from '..';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SavedFormsList.scss';

const SavedFormsList = () => {
    const { savedForms } = useTypeSelector(state => state.form);

    const initialForms = [
        {
            title: 'Отчет № #',
            subtitle: 'описание проекта',
            date: '12.12.2021',
        },
        {
            title: 'Отчет № #',
            subtitle: 'описание проекта',
            date: '13.12.2021',
        },
        {
            title: 'Отчет № #',
            subtitle: 'описание проекта',
            date: '14.12.2021',
        },
    ];

    return (
        <ul className='saved-forms-list'>
            {initialForms.map((item, index) => (
                <SavedFormsItem key={index} index={index} item={item} />
            ))}
        </ul>
    );
};

export default SavedFormsList;
