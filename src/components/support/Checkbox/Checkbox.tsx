import './Checkbox.scss';

const Checkbox = ({title, isChecked, onChange}) => {
    return (
        <label className='form-switch'>
            {title}
            <input type='checkbox' checked={isChecked} onChange={onChange}/>
            <i></i>
        </label>
    );
};

export default Checkbox;
