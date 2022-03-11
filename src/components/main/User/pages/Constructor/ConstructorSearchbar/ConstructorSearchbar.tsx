import './ConstructorSearchbar.scss';

const ConstructorSearchbar = () => {
    return (
        <div className='constructor-searchbar'>
            <button className='constructor-searchbar__button'>Фильтр</button>
            <input
                className='constructor-searchbar__input'
                placeholder='Поиск...'
            />
        </div>
    );
};

export default ConstructorSearchbar;
