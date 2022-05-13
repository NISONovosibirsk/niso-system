import './HandbookForm.scss';

const HandbookForm = () => {
    return (
        <li className='handbook-form'>
            <input
                className='handbook-form__placeholder'
                placeholder='Введите название поля'
            />
            <input className='handbook-form__input' />
        </li>
    );
};

export default HandbookForm;
