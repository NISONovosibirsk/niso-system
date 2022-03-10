import './Searchbar.scss';

const Searchbar = () => {
    return (
        <div className='profile-searchbar'>
            <input className='profile-searchbar__input' placeholder='Поиск...'/>
            {/* <ul className='profile-searchbar__list'></ul> */}
        </div>
    );
};

export default Searchbar;
