import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateHandbookFilter } from '../../../../../../store/actions/userHandbookActions';
import './HandbookSearch.scss';

const HandbookSearch = () => {
    const { notes, isEdit } = useTypeSelector(state => state.userHandbook);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(
            updateHandbookFilter({
                chars: value,
                error: notes.filter(note =>
                    JSON.stringify(note)
                        .toLowerCase()
                        .includes(value.toLowerCase())
                ).length
                    ? ''
                    : 'Ничего не найдено',
            })
        );
    };

    return (
        <div className='handbook-searchbar'>
            <input
                type='text'
                className='handbook-searchbar__input'
                placeholder='Поиск...'
                onChange={handleChange}
                disabled={isEdit}
            />
        </div>
    );
};

export default HandbookSearch;
