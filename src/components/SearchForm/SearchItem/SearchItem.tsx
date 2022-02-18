import { useState } from 'react';
import './SearchItem.scss';

const SearchItem = ({ school }) => {
    // temporary dummy for checkboxes
    const [checked, setChecked] = useState(false);

    return (
        <div className='search-element'>
            <div className='search-element__content'>
                {school.name}, {school.address.street}
            </div>
            <input
                className='search-element__input'
                type='checkbox'
                checked={checked}
            />
            <div
                className='search-element__checkbox'
                onClick={() => setChecked(!checked)}
            ></div>
        </div>
    );
};

export default SearchItem;
