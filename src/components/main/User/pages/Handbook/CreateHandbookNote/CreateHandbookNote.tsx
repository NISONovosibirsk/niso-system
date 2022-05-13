import './CreateHandbookNote.scss';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    addHandbookInput,
    setHandbookPopup,
} from '../../../../../../store/actions/userHandbookActions';
import { Button, Popup } from '../../../../../support';
import HandbookInput from '../HandbookForm/HandbookForm';

const CreateHandbookNote = () => {
    const { createNote } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setHandbookPopup(false));
    };

    const handleAdd = () => {
        const newState = [...createNote.newNotes];
        newState.push({ title: '', value: 0 });
        dispatch(addHandbookInput(newState))
    };

    return (
        <Popup isOpen={createNote.isActive} onClose={handleClose}>
            <div className='handbook-popup'>
                <p className='handbook-popup__title'>
                    Добавление поля в справочник
                </p>
                <ul className='handbook-popup__list'>
                    {createNote.newNotes.map((note, index) => (
                        <HandbookInput key={index} />
                    ))}
                </ul>
                <button className='handbook-popup__add' onClick={handleAdd}>+</button>
                <Button
                    title={'Добавить поля'}
                    width={'204px'}
                    height={'46px'}
                />
            </div>
        </Popup>
    );
};

export default CreateHandbookNote;
