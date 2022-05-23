import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';

import {
    setHandbookNote,
    setIsEdit,
    setIsValid,
    updatePlaceholderError,
    updateValueError,
} from '../../../../../../store/actions/userHandbookActions';
import { Button } from '../../../../../support';
import './HandbookEditForm.scss';

const HandbookEditForm = ({ note, index }) => {
    const { notes, placeholderError, valueError, isValid } = useTypeSelector(
        state => state.userHandbook
    );
    const dispatch = useDispatch();

    const handleSave = () => {
        const newNotes = [...notes];
        newNotes[index].isEdit = false;
        dispatch(setHandbookNote(newNotes));
        dispatch(setIsEdit(false));
    };

    const handlePlaceholder = e => {
        const newNotes = [...notes];
        newNotes[index].placeholder = e.target.value;
        dispatch(setHandbookNote(newNotes));
    };

    const handleValue = e => {
        const newNotes = [...notes];
        newNotes[index].value = e.target.value;
        dispatch(setHandbookNote(newNotes));
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
        <form className='handbook-item-edit'>
            <input
                className={`handbook-item-edit__placeholder ${
                    placeholderError
                        ? 'handbook-item-edit__placeholder-invalid'
                        : ''
                }`}
                name='placeholder'
                value={notes[index].placeholder}
                required
                onChange={handleChange}
            />
            <input
                className={`handbook-item-edit__value ${
                    valueError ? 'handbook-item-edit__value-invalid' : ''
                }`}
                name='value'
                value={notes[index].value}
                required
                onChange={handleChange}
                type='number'
            />
            <Button
                isDisabled={!isValid}
                title='Сохранить'
                onClick={handleSave}
                height='25px'
            ></Button>
        </form>
    );
};

export default HandbookEditForm;
