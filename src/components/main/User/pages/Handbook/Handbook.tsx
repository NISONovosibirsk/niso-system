import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { setHandbookPopup } from '../../../../../store/actions/userHandbookActions';
import { Button, Search } from '../../../../support';
import CreateHandbookNote from './CreateHandbookNote/CreateHandbookNote';
import './Handbook.scss';
import HandbookEditForm from './HandbookEditForm/HandbookEditForm';
import HandbookNoteItem from './HandbookNoteItem/HandbookNoteItem';
import HandbookSearch from './HandbookSearch/HandbookSearch';

const Handbook = () => {
    const { notes, placeholderError, valueError, isEdit, filter } =
        useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handlePopup = () => {
        dispatch(setHandbookPopup(true));
    };

    const filteredNoteList = notes.filter(note =>
        JSON.stringify(note).toLowerCase().includes(filter.chars.toLowerCase())
    );

    return (
        <section className='user-handbook'>
            <HandbookSearch />
            <Button
                onClick={handlePopup}
                height='45px'
                width='150px'
                margin='0 16px 0 8px'
                title={'Добавить значение'}
                isDisabled={isEdit}
            />
            <span className='user-handbook__error'>{filter.error}</span>
            <ul className='user-handbook__list'>
                {filteredNoteList.map((note, index) =>
                    note.isEdit ? (
                        <HandbookEditForm
                            note={note}
                            index={index}
                            key={index}
                        />
                    ) : (
                        <HandbookNoteItem
                            key={index}
                            note={note}
                            index={index}
                        />
                    )
                )}
                <span className='user-handbook__error'>
                    {valueError || placeholderError}
                </span>
            </ul>
            <CreateHandbookNote />
        </section>
    );
};

export default Handbook;
