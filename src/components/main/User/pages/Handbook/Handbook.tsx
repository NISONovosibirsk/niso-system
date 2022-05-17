import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { setHandbookPopup } from '../../../../../store/actions/userHandbookActions';
import { Button } from '../../../../support';
import CreateHandbookNote from './CreateHandbookNote/CreateHandbookNote';
import './Handbook.scss';
import HandbookNoteItem from './HandbookNoteItem/HandbookNoteItem';
import HandbookSearchbar from './HandbookSearchbar/HandbookSearchbar';

const Handbook = () => {
    const { notes } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handlePopup = () => {
        dispatch(setHandbookPopup(true));
    };

    return (
        <section className='user-handbook'>
            <HandbookSearchbar />
            <Button
                onClick={handlePopup}
                height='45px'
                width='150px'
                margin='0 16px 0 8px'
                title={'Добавить значение'}
            />
            <ul className='user-handbook__list'>
                {notes.map((note, index) => (
                    <HandbookNoteItem key={index} note={note} index={index}/>
                ))}
            </ul>
            <CreateHandbookNote />
        </section>
    );
};

export default Handbook;
