import './Searchbar.scss';

const Searchbar = () => {
    return (
        <div className='searchbar'>
            <input className='searchbar__input' placeholder='Поиск...'/>
            <ul className='searchbar__list'></ul>
        </div>
    );
};

export default Searchbar;
