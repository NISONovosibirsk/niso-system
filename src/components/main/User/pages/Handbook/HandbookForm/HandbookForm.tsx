import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { setHandbookNote } from '../../../../../../store/actions/userHandbookActions';
import './HandbookForm.scss';

const HandbookForm = ({ index }) => {
    const { createNote } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handlePlaceholder = e => {
        const newNotes = [...createNote.newNotes];
        newNotes[index].placeholder = e.target.value;
        dispatch(setHandbookNote(newNotes));
    };

    const handleValue = e => {
        const newNotes = [...createNote.newNotes];
        newNotes[index].value = e.target.value;
        dispatch(setHandbookNote(newNotes));
    };

    return (
        <li className='handbook-form'>
            <input
                onChange={handlePlaceholder}
                className='handbook-form__placeholder'
                placeholder='Введите название поля'
            />
            <input onChange={handleValue} className='handbook-form__input' />
        </li>
    );
};

export default HandbookForm;
