import './ConstructorFilterTabs.scss';
//tabs
const ConstructorFilterTabs = () => {
    return (
        <ul className='constructor-filter-tabs'>
            <li className='constructor-filter-tabs__item'>Одобрить</li>
            <li className='constructor-filter-tabs__item'>Все</li>
            <li className='constructor-filter-tabs__item'>Мои</li>
            <li className='constructor-filter-tabs__item'></li>
        </ul>
    );
};

export default ConstructorFilterTabs;
