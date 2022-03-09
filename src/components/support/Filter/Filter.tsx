import './Filter.scss';

const Filter = () => {
    return (
        <fieldset className='filter'>
            <legend className='filter__legend'>Фильтр</legend>
            <input className='filter__input' type='date' name='earliestDate' />
            -
            <input className='filter__input' type='date' name='lastestDate' />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='ИНН'
                list='reportType'
                name='INN'
            />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='КОУ'
                list='reportType'
                name='KOU'
            />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='Вид отчетности'
                list='reportType'
                name='reportType'
            />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='Вид отчетности'
                list='reportType'
                name='reportType'
            />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='Вид отчетности'
                list='reportType'
                name='reportType'
            />
            <input
                className='filter__input'
                autoComplete='disable'
                placeholder='Вид отчетности'
                list='reportType'
                name='reportType'
            />
            <datalist id='INN'>
                <option value='1' />
                <option value='2' />
                <option value='3' />
                <option value='4' />
            </datalist>
            <datalist id='KOU'>
                <option value='1' />
                <option value='2' />
                <option value='3' />
                <option value='4' />
            </datalist>
            <datalist id='reportType'>
                <option value='1' />
                <option value='2' />
                <option value='3' />
                <option value='4' />
            </datalist>
        </fieldset>
    );
};

export default Filter;
