import { useTypeSelector } from '../../../../../hooks/useTypeSelector';
import EICard from './EICard/EICard';
import './ListEI.scss';
import ListEISearchbar from './ListEISearchbar/ListEISearchbar';

const ListEI = () => {
    const {
        list,
        search: { chars, filter },
    } = useTypeSelector(state => state.userListEI);

    console.log(
        list
            .filter(card =>
                JSON.stringify(card).toLowerCase().includes(chars.toLowerCase())
            )
            .filter(card =>
                JSON.stringify(card).includes(
                    filter.list[0].picked.length ? filter.list[0].picked[0] : ''
                )
            )
    );

    return (
        <section className='list-ei'>
            <ListEISearchbar />
            <ul className='list-ei__cards'>
                {list
                    .filter(card =>
                        JSON.stringify(card)
                            .toLowerCase()
                            .includes(chars.toLowerCase())
                    )
                    .filter(card =>
                        filter.list[0].picked.length
                            ? filter.list[0].picked.includes(card.district)
                            : true
                    )
                    .filter(card =>
                        filter.list[1].picked.length
                            ? filter.list[1].picked.includes(card.type)
                            : true
                    )
                    .map((ei, index) => (
                        <EICard ei={ei} key={index} />
                    ))}
            </ul>
        </section>
    );
};

export default ListEI;
