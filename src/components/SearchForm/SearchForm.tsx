import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './SearchForm.scss';
import schoolList from '../../assets/mock.json';
import SearchItem from './SearchItem/SearchItem';
import { Button, Popup } from '..';
import {
    setOpenStatus,
    updateFilterChars,
    updateSelectedSchools,
} from '../../store/actions/sendFormPopupActions';

const SearchForm = () => {
    const { isOpen, filterChars, selectedSchools } = useTypeSelector(
        state => state.sendForm
    );
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setOpenStatus(false));
        dispatch(updateFilterChars(''));
    };

    const handleChangeFilterChars = e => {
        dispatch(updateFilterChars(e.target.value));
    };

    const handleSelectedSchools = school => {
        const newSelectedSchools = [...selectedSchools];

        if (selectedSchools.includes(school)) {
            newSelectedSchools.splice(newSelectedSchools.indexOf(school), 1);
        } else {
            newSelectedSchools.push(school);
        }

        dispatch(updateSelectedSchools(newSelectedSchools));
    };

    const handleFilter = schoolList.filter(item => {
        const school = JSON.stringify(item).toLowerCase();
        const input = filterChars.toLowerCase();
        return school.includes(input);
    });

    return (
        <Popup onClose={handleClose} isOpen={isOpen}>
            <div className='search-form'>
                <input
                    className='search-form__input'
                    placeholder='Поиск по школам'
                    onChange={handleChangeFilterChars}
                    value={filterChars}
                />
                <ul className='search-form__list'>
                    {handleFilter.map((school, index) => {
                        const isChecked = selectedSchools.includes(school);
                        return (
                            <SearchItem
                                school={school}
                                isChecked={isChecked}
                                onChange={handleSelectedSchools}
                                key={index}
                            />
                        );
                    })}
                </ul>
                <Button title='отправить' types={['filled', 'center']} />
            </div>
        </Popup>
    );
};

export default SearchForm;
