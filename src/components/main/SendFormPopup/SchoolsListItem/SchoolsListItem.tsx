import { Checkbox } from '../../../support';
import './SchoolsListItem.scss';

const SchoolsListItem = ({ school, isChecked, onChange }) => {
    const handleChange = () => {
        onChange(school);
    };

    return (
        <li className='schools-list-item'>
            <p className='schools-list-item__title' onClick={handleChange}>
                {school.name}, {school.address.street}
            </p>
            <Checkbox isChecked={isChecked} onChange={handleChange} />
        </li>
    );
};

export default SchoolsListItem;
