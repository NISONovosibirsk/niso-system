import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateFilterTabs } from '../../../../../../store/actions/userConstrucorActions';
import './ConstructorFilterTabs.scss';
const ConstructorFilterTabs = () => {
    const { tabs } = useTypeSelector(state => state.userConstructor.filter);
    const dispatch = useDispatch();

    const handleClick = e => {
        const { id } = e.target;

        const newTabs = { ...tabs };
        for (let key in newTabs) {
            newTabs[key] = false;
        }
        newTabs[id] = true;

        dispatch(updateFilterTabs(newTabs));
    };

    return (
        <ul className='constructor-filter-tabs'>
            <li
                className={`constructor-filter-tabs__item ${
                    tabs.all && 'constructor-filter-tabs__item_active'
                }`}
                id='all'
                onClick={handleClick}
            >
                Все
            </li>
            <li
                className={`constructor-filter-tabs__item ${
                    tabs.my && 'constructor-filter-tabs__item_active'
                }`}
                id='my'
                onClick={handleClick}
            >
                Мои
            </li>
            <li
                className={`constructor-filter-tabs__item ${
                    tabs.approve && 'constructor-filter-tabs__item_active'
                }`}
                id='approve'
                onClick={handleClick}
            >
                Одобрить
            </li>
            <li className='constructor-filter-tabs__item'></li>
        </ul>
    );
};

export default ConstructorFilterTabs;
