import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import { listEIFilter } from '../../../../../middleware';
import EICard from './EICard/EICard';
import './ListEI.scss';
import ListEISearchbar from './ListEISearchbar/ListEISearchbar';

const ListEI = () => {
    const {
        cards,
        search: { chars, filter },
    } = useTypeSelector(state => state.userListEI);

    return (
        <section className='list-ei'>
            <ListEISearchbar />
            <ul className='list-ei__cards'>
                {listEIFilter(cards, chars, filter).map((card, index) => (
                    <EICard ei={card} key={index} />
                ))}
            </ul>
        </section>
    );
};

export default ListEI;
