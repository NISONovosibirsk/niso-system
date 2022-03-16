import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updateFilterChars } from '../../../../../../../store/actions/userConstrucorActions';
import './ReportsSearchbar.scss';

const ReportsSearchbar = () => {
    const { chars } = useTypeSelector(state => state.userConstructor.filter);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(updateFilterChars(value));
    };

    return (
        <div className='reports-searchbar'>
            <button className='reports-searchbar__button'>Фильтр</button>
            <input
                className='reports-searchbar__input'
                placeholder='Поиск...'
                onChange={handleChange}
                value={chars}
            />
        </div>
    );
};

export default ReportsSearchbar;
