import './CreateHandbookNote.scss';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    addNotesToHandbook,
    setHandbookNote,
    setHandbookPopup,
} from '../../../../../../store/actions/userHandbookActions';
import { Button, Popup } from '../../../../../support';
import HandbookInput from '../HandbookForm/HandbookForm';

const CreateHandbookNote = () => {
    const { createNote, notes } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setHandbookPopup(false));
    };

    const handleAddInput = () => {
        const newState = [...createNote.newNotes];
        newState.push({ title: '', value: 0 });
        dispatch(setHandbookNote(newState));
    };

    const handleAddNotes = () => {
        const userNotes = [...notes];
        userNotes.push(createNote.newNotes);
        dispatch(addNotesToHandbook(userNotes));
    };

    return (
        <Popup isOpen={createNote.isActive} onClose={handleClose}>
            <div className='handbook-popup'>
                <p className='handbook-popup__title'>
                    Добавление поля в справочник
                </p>
                <ul className='handbook-popup__list'>
                    {createNote.newNotes.map(( index) => (
                        <HandbookInput key={index} index={index} />
                    ))}
                </ul>
                <button
                    className='handbook-popup__add'
                    onClick={handleAddInput}
                >
                    +
                </button>
                <Button
                    title={'Добавить поля'}
                    width={'204px'}
                    height={'46px'}
                    onClick={handleAddNotes}
                />
            </div>
        </Popup>
    );
};

export default CreateHandbookNote;
