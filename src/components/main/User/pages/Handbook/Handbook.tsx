import { useDispatch } from 'react-redux';
import { setHandbookPopup } from '../../../../../store/actions/userHandbookActions';
import { Button } from '../../../../support';
import CreateHandbookNote from './CreateHandbookNote/CreateHandbookNote';
import './Handbook.scss';
import HandbookSearchbar from './HandbookSearchbar/HandbookSearchbar';

const Handbook = () => {
    const dispatch = useDispatch();

    const handlePopup = () => {
        dispatch(setHandbookPopup(true));
    };

    return (
        <section className='user-handbook'>
            <HandbookSearchbar />
            <Button
                onClick={handlePopup}
                height='45px'
                width='150px'
                margin='0 16px 0 8px'
                title={'Добавить значение'}
            />
            <CreateHandbookNote />
        </section>
    );
};

export default Handbook;
