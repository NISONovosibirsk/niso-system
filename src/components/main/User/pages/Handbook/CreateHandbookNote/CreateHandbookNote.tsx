import './CreateHandbookNote.scss';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    addNotesToHandbook,
    resetHandbookPopup,
    setNewHandbookNote,
} from '../../../../../../store/actions/userHandbookActions';
import { Button, Popup } from '../../../../../support';
import HandbookForm from '../HandbookForm/HandbookForm';

const CreateHandbookNote = () => {
    const { createNote, notes, isValid, valueError, placeholderError } =
        useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(resetHandbookPopup());
    };

    const handleAddInput = e => {
        e.preventDefault();
        const newState = [...createNote.newNotes];
        newState.push({ placeholder: '', value: '', isEdit: false });
        dispatch(setNewHandbookNote(newState));
    };

    const handleAddNotes = e => {
        e.preventDefault();
        const userNotes = [...notes];
        userNotes.push.apply(userNotes, createNote.newNotes);
        dispatch(addNotesToHandbook(userNotes));
        dispatch(resetHandbookPopup());
    };

    return (
        <Popup isOpen={createNote.isActive} onClose={handleClose}>
            <form className='handbook-popup'>
                <p className='handbook-popup__title'>
                    Добавление поля в справочник
                </p>
                <ul className='handbook-popup__list'>
                    {createNote.newNotes.map((newNote, index) => (
                        <HandbookForm key={index} index={index} />
                    ))}
                    <span className='handbook-popup__error'>
                        {valueError || placeholderError}
                    </span>
                </ul>
                <button
                    className='handbook-popup__add'
                    onClick={handleAddInput}
                >
                    +
                </button>
                <Button
                    isDisabled={!isValid}
                    title={'Добавить поля'}
                    width={'204px'}
                    height={'46px'}
                    onClick={handleAddNotes}
                />
            </form>
        </Popup>
    );
};

export default CreateHandbookNote;
