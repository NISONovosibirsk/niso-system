import './OrganizerFilterTabs.scss';

const OrganizerFilterTabs = ({ currentTab, setCurrentTab }) => {
    const handleClick = e => {
        const { innerText } = e.target;

        setCurrentTab(innerText);
    };

    return (
        <ul className='organizer-filter-tabs'>
            <li
                className={`organizer-filter-tabs__item ${
                    currentTab === 'Мониторинг' &&
                    'organizer-filter-tabs__item_active'
                }`}
                onClick={handleClick}
            >
                Мониторинг
            </li>
            <li
                className={`organizer-filter-tabs__item ${
                    currentTab === 'Мероприятия' &&
                    'organizer-filter-tabs__item_active'
                }`}
                onClick={handleClick}
            >
                Мероприятия
            </li>
            {/* <li
                className={`organizer-filter-tabs__item ${
                    currentTab === 'Конференции' &&
                    'organizer-filter-tabs__item_active'
                }`}
                onClick={handleClick}
            >
                Конференции
            </li> */}
            <li className='organizer-filter-tabs__item'></li>
        </ul>
    );
};

export default OrganizerFilterTabs;
