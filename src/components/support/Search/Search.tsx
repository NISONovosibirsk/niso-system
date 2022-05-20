import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { setSearchChars } from '../../../store/actions/searchActions';
import './Search.scss';

const Search = ({ width, height, store, placeholder }) => {
    const { chars } = useTypeSelector(state => state.search);
    const dispatch = useDispatch();

    const handleChars = e => {
        
    };

    return (
        <input
            style={{ width: width, height: height }}
            type='text'
            className='searchbar'
            placeholder={placeholder}
            onChange={handleChars}
        />
    );
};

export default Search;
