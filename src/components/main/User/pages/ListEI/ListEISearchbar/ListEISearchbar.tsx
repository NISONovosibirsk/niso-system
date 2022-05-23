import './ListEISearchbar.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import {
    updateSearchChars,
    updateSearchList,
} from '../../../../../../store/actions/userListEIActions';
import Modal from '../../../../../support/Modal/Modal';
import FilterModal from '../../../../FilterModal/FilterModal';

const ListEISearchbar = () => {
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [scrollTop, setScrollTop] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
    const [secondModalPosition, setSecondModalPosition] = useState({
        top: 0,
        left: 0,
    });
    const [secondModalIndex, setSecondModalIndex] = useState(-1);

    const { chars, filter } = useTypeSelector(state => state.userListEI.search);
    const dispatch = useDispatch();
    const filterRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (null !== filterRef.current) {
            const elementPosition = filterRef.current?.getBoundingClientRect();

            setModalPosition({
                top: elementPosition.bottom + 8,
                left: elementPosition.left,
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollTop]);

    const handleScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        handleCloseModal();
        handleCloseSecondModal();
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleOpenSecondModal = (position, index) => {
        setSecondModalIsOpen(true);
        setSecondModalPosition(position);
        setSecondModalIndex(index);
    };

    const handleCloseSecondModal = () => {
        setSecondModalIsOpen(false);
        setSecondModalIndex(-1);
    };

    const handleSecondModalClick = index => {
        const newList: any[] = [...filter.list];
        const newPicked: string[] = [...newList[secondModalIndex].picked];

        if (newPicked.indexOf(newList[secondModalIndex].options[index]) > -1) {
            newPicked.splice(
                newPicked.indexOf(newList[secondModalIndex].options[index]),
                1
            );
        } else {
            newPicked.push(newList[secondModalIndex].options[index]);
        }

        newList[secondModalIndex].picked = newPicked;

        dispatch(updateSearchList(newList));
    };

    const handleUpdateSearchList = newList => {
        dispatch(updateSearchList(newList));
    };

    const handleChange = e => {
        const { value } = e.target;
        dispatch(updateSearchChars(value));
    };

    return (
        <div className='list-ei-searchbar'>
            <button
                className='list-ei-searchbar__button'
                onClick={handleOpenModal}
                ref={filterRef}
            >
                Фильтр
            </button>
            <FilterModal
                onClose={handleCloseModal}
                isOpen={isOpen}
                position={modalPosition}
                filter={filter}
                secondModalIndex={secondModalIndex}
                onSecondModalOpen={handleOpenSecondModal}
                onUpdateSearchList={handleUpdateSearchList}
            />
            {secondModalIsOpen && (
                <Modal
                    onClose={handleCloseSecondModal}
                    isOpen={secondModalIsOpen}
                    position={secondModalPosition}
                >
                    {filter.list[secondModalIndex].options.map(
                        (option, index) => (
                            <button
                                className='modal__button'
                                onClick={() => handleSecondModalClick(index)}
                                key={index}
                            >
                                {option}
                            </button>
                        )
                    )}
                </Modal>
            )}
            <input
                className='list-ei-searchbar__input'
                placeholder='Поиск...'
                onChange={handleChange}
                value={chars}
            />
        </div>
    );
};

export default ListEISearchbar;
