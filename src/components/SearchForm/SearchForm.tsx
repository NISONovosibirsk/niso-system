import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { setSearchInput, updateStatus } from '../../store/actions/formActions';
import './SearchForm.scss';
import schoolList from '../../assets/mock.json';
import SearchItem from './SearchItem/SearchItem';

const SearchForm = () => {
    const dispatch = useDispatch();
    const { isActive, searchInput } = useTypeSelector(state => state.form);

    const handleClose = () => {
        const newState = { ...isActive };
        newState.searchModal = false;
        dispatch(updateStatus(newState));
    };

    const handleSearchInput = e => {
        dispatch(setSearchInput(e.target.value));
    };

    const handleFilter = schoolList.filter(item => {
        const school = JSON.stringify(item).toLowerCase();
        const input = searchInput.toLowerCase();
        return school.includes(input);
    });

    return (
        <div
            className={`search-form ${
                isActive.searchModal && 'search-form_active'
            }`}
            onClick={handleClose}
        >
            <div
                className='search-form__content'
                onClick={e => e.stopPropagation()}
            >
                <input
                    className='search-form__input'
                    placeholder='Поиск по школам'
                    onChange={handleSearchInput}
                />
                <div className='search-form__field'>
                    {handleFilter.map((school, index) => (
                        <SearchItem school={school} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
