import './SendReportPopupSearchbar.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    updateSearchChars,
    updateSearchList,
} from '../../../../../../../../store/actions/userListEIActions';
import Modal from '../../../../../../../support/Modal/Modal';
import FilterModal from '../../../../../../FilterModal/FilterModal';

const SendReportPopupSearchbar = () => {
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [scrollTop, setScrollTop] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
    const [secondModalPosition, setSecondModalPosition] = useState({
        top: 0,
        left: 0,
    });
    const [secondModalIndex, setSecondModalIndex] = useState(-1);

    const [thirdModalIsOpen, setThirdModalIsOpen] = useState(false);
    const [thirdModalPosition, setThirdModalPosition] = useState({
        top: 0,
        left: 0,
    });
    const [thirdModalIndex, setThirdModalIndex] = useState(-1);

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

    const handleSecondModalClick = e => {
        const title = e.target.outerText;

        const newList: any[] = [...filter.list];
        const newPicked: string[] = [...newList[secondModalIndex].picked];

        if (newPicked.indexOf(title) > -1) {
            newPicked.splice(newPicked.indexOf(title), 1);
        } else {
            newPicked.push(title);
        }

        newList[secondModalIndex].picked = newPicked;

        dispatch(updateSearchList(newList));
    };

    const handleOpenThirdModal = (e, index) => {
        const position = e.target.getBoundingClientRect();
        setThirdModalIsOpen(true);
        setThirdModalPosition({
            top: position.top,
            left: position.right + 8,
        });
        setThirdModalIndex(index);
    };

    const handleCloseThirdModal = () => {
        setThirdModalIsOpen(false);
        setThirdModalIndex(-1);
    };

    const handleUpdateSearchList = newList => {
        dispatch(updateSearchList(newList));
    };

    const handleChange = e => {
        const { value } = e.target;
        dispatch(updateSearchChars(value));
    };

    return (
        <div className='send-report-popup-searchbar'>
            <button
                className='send-report-popup-searchbar__button'
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
                    activeButton={thirdModalIndex}
                >
                    {filter.list[secondModalIndex].options
                        .sort()
                        .map((option, index) =>
                            typeof option === 'string' ? (
                                <button
                                    className='modal__button'
                                    onClick={handleSecondModalClick}
                                    key={index}
                                >
                                    {option}
                                </button>
                            ) : (
                                <button
                                    className='modal__button'
                                    onMouseOver={e =>
                                        handleOpenThirdModal(e, index)
                                    }
                                    key={index}
                                >
                                    {option.title}
                                </button>
                            )
                        )}
                </Modal>
            )}
            {
                <Modal
                    onClose={handleCloseThirdModal}
                    isOpen={thirdModalIsOpen}
                    position={thirdModalPosition}
                >
                    {filter.list[1].options[0].subOptions.map(
                        (option, index) => (
                            <button
                                className='modal__button'
                                onClick={handleSecondModalClick}
                                key={index}
                            >
                                {option}
                            </button>
                        )
                    )}
                </Modal>
            }
            <input
                className='send-report-popup-searchbar__input'
                placeholder='Поиск...'
                onChange={handleChange}
                value={chars}
            />
        </div>
    );
};

export default SendReportPopupSearchbar;
