import './Checkbox.scss';

const Checkbox = ({ title }) => {
    return (
        <label className='checkbox'>
            <input className='checkbox__input' type='checkbox' />
            <div className='checkbox__custom'></div>
            {title}
        </label>
    );
};

export default Checkbox;
