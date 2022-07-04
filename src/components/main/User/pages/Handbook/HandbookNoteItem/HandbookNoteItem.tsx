import { useDispatch } from 'react-redux';
import { EditIcon, TrashIcon } from '../../../../../../assets';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    setHandbookNote,
    setIsEdit,
    setIsValid,
} from '../../../../../../store/actions/userHandbookActions';
import './HandbookNoteItem.scss';

const HandbookNoteItem = ({ note, index }) => {
    const { notes } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handleEdit = () => {
        const newState = [...notes];
        newState[index].isEdit = true;
        dispatch(setHandbookNote(newState));
        dispatch(setIsValid(true));
        dispatch(setIsEdit(true));
    };

    const handleDelete = () => {
        const editNotes = [...notes];
        editNotes.splice(index, 1);
        dispatch(setHandbookNote(editNotes));
    };

    return (
        <li className='handbook-item'>
            <p className='handbook-item__placeholder'>{note.placeholder}</p>
            <p className='handbook-item__value'>{note.value}</p>
            <EditIcon className='handbook-item__button' onClick={handleEdit} />
            <TrashIcon
                className='handbook-item__button'
                onClick={handleDelete}
            />
        </li>
    );
};

export default HandbookNoteItem;
