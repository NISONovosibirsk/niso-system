import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    setIsValid,
    updateValueError,
} from '../../../../../../store/actions/userHandbookActions';
import {
    setNewHandbookNote,
    updatePlaceholderError,
} from '../../../../../../store/actions/userHandbookActions';
import './HandbookForm.scss';

const HandbookForm = ({ index }) => {
    const { createNote, placeholderError, valueError } = useTypeSelector(
        state => state.userHandbook
    );
    const dispatch = useDispatch();

    const handlePlaceholder = e => {
        const newNotes = [...createNote.newNotes];
        newNotes[index] = { ...newNotes[index], placeholder: e.target.value };
        dispatch(setNewHandbookNote(newNotes));
    };

    const handleValue = e => {
        const newNotes = [...createNote.newNotes];
        newNotes[index] = { ...newNotes[index], value: e.target.value };
        dispatch(setNewHandbookNote(newNotes));
    };

    const handleChange = e => {
        const { name, validationMessage } = e.target;

        switch (name) {
            case 'placeholder':
                handlePlaceholder(e);
                dispatch(updatePlaceholderError(validationMessage));
                dispatch(
                    setIsValid(
                        e.target.closest('form').checkValidity() ? true : false
                    )
                );
                break;
            case 'value':
                handleValue(e);
                dispatch(updateValueError(validationMessage));
                dispatch(
                    setIsValid(
                        e.target.closest('form').checkValidity() ? true : false
                    )
                );
                break;
            default:
                break;
        }
    };

    return (
        <li className='handbook-form'>
            <input
                // className='handbook-form__placeholder'
                className={`handbook-form__placeholder ${
                    placeholderError ? 'handbook-form__placeholder-invalid' : ''
                }`}
                onChange={handleChange}
                name='placeholder'
                required
                placeholder='Введите название поля'
                value={createNote.newNotes[index].placeholder}
            />
            <input
                
                className={`handbook-form__value ${
                    valueError ? 'handbook-form__value-invalid' : ''
                }`}
                type='number'
                onChange={handleChange}
                name='value'
                required
                placeholder='Числовое поле'
                value={createNote.newNotes[index].value}
            />
        </li>
    );
};

export default HandbookForm;
