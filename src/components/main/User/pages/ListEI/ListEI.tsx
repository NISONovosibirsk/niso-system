import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import EICard from './EICard/EICard';
import './ListEI.scss';
import ListEISearchbar from './ListEISearchbar/ListEISearchbar';

const ListEI = () => {
    const { list, search } = useTypeSelector(state => state.userListEI);

    console.log(
        list.filter(card =>
            JSON.stringify(card)
                .toLowerCase()
                .includes(search.chars.toLowerCase())
        )
    );

    return (
        <section className='list-ei'>
            <ListEISearchbar />
            <ul className='list-ei__cards'>
                {list
                    // .filter(card => card.includes(search.chars))
                    .map(ei => (
                        <EICard ei={ei} />
                    ))}
            </ul>
        </section>
    );
};

export default ListEI;
