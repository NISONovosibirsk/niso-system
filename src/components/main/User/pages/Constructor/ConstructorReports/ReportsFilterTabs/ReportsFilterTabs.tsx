import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import { updateSearchTabs } from '../../../../../../../store/actions/userConstrucorActions';
import './ReportsFilterTabs.scss';
const ReportsFilterTabs = () => {
    const { tabs } = useTypeSelector(state => state.userConstructor.search);
    const dispatch = useDispatch();

    const handleClick = e => {
        const { id } = e.target;

        const newTabs = { ...tabs };
        for (let key in newTabs) {
            newTabs[key] = false;
        }
        newTabs[id] = true;

        dispatch(updateSearchTabs(newTabs));
    };

    return (
        <ul className='reports-filter-tabs'>
            <li
                className={`reports-filter-tabs__item ${
                    tabs.all && 'reports-filter-tabs__item_active'
                }`}
                id='all'
                onClick={handleClick}
            >
                Все
            </li>
            <li
                className={`reports-filter-tabs__item ${
                    tabs.my && 'reports-filter-tabs__item_active'
                }`}
                id='my'
                onClick={handleClick}
            >
                Мои
            </li>
            <li
                className={`reports-filter-tabs__item ${
                    tabs.approve && 'reports-filter-tabs__item_active'
                }`}
                id='approve'
                onClick={handleClick}
            >
                Одобрить
            </li>
            <li className='reports-filter-tabs__item'></li>
        </ul>
    );
};

export default ReportsFilterTabs;
