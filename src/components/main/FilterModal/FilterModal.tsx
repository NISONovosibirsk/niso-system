import Modal from '../../support/Modal/Modal';
import './FilterModal.scss';

const FilterModal = ({
    onClose,
    isOpen,
    position,
    filter,
    secondModalIndex,
    onSecondModalOpen,
    onUpdateSearchList,
}) => {
    const handleOpenSecondModal = (e, index) => {
        const elementPosition = e.target.getBoundingClientRect();

        onSecondModalOpen(
            {
                top: elementPosition.top,
                left: elementPosition.right + 8,
            },
            index
        );
    };

    const handleSecondModalClick = (itemIndex, nameIndex) => {
        const newList: any[] = [...filter.list];
        const newPicked: string[] = [...newList[itemIndex].picked];

        newPicked.splice(nameIndex, 1);

        newList[itemIndex].picked = newPicked;

        onUpdateSearchList(newList);
    };

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            position={position}
            type='filter'
            activeButton={secondModalIndex}
        >
            <div className='filter-modal'>
                <p className='filter-modal__title'>Сортировать</p>
                <ul className='filter-modal__list filter-modal__list_main'>
                    {filter.list.map((item, itemIndex) =>
                        item.picked.length ? (
                            <li
                                className='filter-modal__item filter-modal__item_main'
                                key={itemIndex + 'checked'}
                            >
                                <p className='filter-modal__checked-title'>
                                    {item.title}:
                                </p>
                                <ul className='filter-modal__list filter-modal__list_second'>
                                    {item.picked
                                        .sort()
                                        .map((name, nameIndex) => (
                                            <li
                                                className='filter-modal__item filter-modal__item_second'
                                                onClick={() => {
                                                    handleSecondModalClick(
                                                        itemIndex,
                                                        nameIndex
                                                    );
                                                }}
                                                key={nameIndex + 'name'}
                                            >
                                                {name}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        ) : null
                    )}
                </ul>
            </div>
            {filter.list.map((item, index) => (
                <button
                    className='modal__button'
                    onClick={e => handleOpenSecondModal(e, index)}
                    key={index}
                >
                    {item.title}
                </button>
            ))}
        </Modal>
    );
};

export default FilterModal;
