import { FormElementCheckbox } from '../..';
import './SearchItem.scss';

const SearchItem = ({ school, isChecked, onChange }) => {
    const handleChange = () => {
        onChange(school);
    };
    return (
        <li className='search-element'>
            <div className='search-element__content'>
                {school.name}, {school.address.street}
            </div>
            <FormElementCheckbox
                isChecked={isChecked}
                onChange={handleChange}
            />
        </li>
    );
};

export default SearchItem;
