import './Checkbox.scss';

const Checkbox = ({ title, isChecked, onChange }) => {
    return (
        <label className='checkbox'>
            <input
                className='checkbox__input'
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
                id={title}
            />
            <div className='checkbox__custom'></div>
            {title}
        </label>
    );
};

export default Checkbox;
