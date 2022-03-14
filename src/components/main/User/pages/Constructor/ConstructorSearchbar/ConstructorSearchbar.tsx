import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateFilterChars } from '../../../../../../store/actions/userConstrucorActions';
import './ConstructorSearchbar.scss';

const ConstructorSearchbar = () => {
    const { chars } = useTypeSelector(state => state.userConstructor.filter);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(updateFilterChars(value));
    };

    return (
        <div className='constructor-searchbar'>
            <button className='constructor-searchbar__button'>Фильтр</button>
            <input
                className='constructor-searchbar__input'
                placeholder='Поиск...'
                onChange={handleChange}
                value={chars}
            />
        </div>
    );
};

export default ConstructorSearchbar;
