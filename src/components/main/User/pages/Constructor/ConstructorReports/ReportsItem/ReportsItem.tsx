import './ReportsItem.scss';
import { OpenModalIcon } from '../../../../../../../assets';
import { useEffect, useRef, useState } from 'react';
import Modal from '../../../../../../support/Modal/Modal';
import { Button } from '../../../../../../support';

const ReportsItem = () => {
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [scrollTop, setScrollTop] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const modalIconRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        if (null !== modalIconRef.current) {
            const elementPosition =
                modalIconRef.current?.getBoundingClientRect();
            setModalPosition({
                top: elementPosition.top,
                left: elementPosition.left - 240,
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollTop]);

    const handleScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
    };

    const handleOpenModal = e => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <li className='reports-item'>
            <div className='reports-item__content'>
                <p className='reports-item__status'>Изучен</p>
                <h2 className='reports-item__title'>Регламент о регламентах</h2>
                <p className='reports-item__access'>Всем сотрудникам</p>
                <Button title='Посмотреть' type='report-item' />
                <OpenModalIcon
                    className={'reports-item__button-open-modal'}
                    onClick={handleOpenModal}
                    ref={modalIconRef}
                />
                <Modal
                    onClose={handleCloseModal}
                    isOpen={isOpen}
                    position={modalPosition}
                >
                    <button className='modal__button'>Редактировать</button>
                    <button className='modal__button'>Удалить</button>
                    <button className='modal__button'>Скачать</button>
                </Modal>
            </div>
        </li>
    );
};

export default ReportsItem;
