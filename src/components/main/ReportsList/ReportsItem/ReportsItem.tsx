import './ReportsItem.scss';
import { ISavedFormItem } from '../../../../interfaces';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import { updateAddedElements } from '../../../../store/actions/formConstructorActions';
import { useDispatch } from 'react-redux';
import {
    setOpenStatus,
    setSelectedForm,
} from '../../../../store/actions/sendFormPopupActions';
import { setForms } from '../../../../store/actions/reportsFormsListActions';
import { OpenModalIcon } from '../../../../assets';
import { useEffect, useState } from 'react';

const ReportsItem = () => {
    const { forms } = useTypeSelector(state => state.reportsFormsList);
    const dispatch = useDispatch();

    const [position, setPosition] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {}, [position]);

    // const handleEdit = () => {
    //     const newAddedElements = [...forms[index].content];
    //     dispatch(updateAddedElements(newAddedElements));
    // };

    // const handleRemove = () => {
    //     localStorage.removeItem(String(reportForm._id));
    //     const newForms = [...forms];
    //     newForms.splice(index, 1);
    //     dispatch(setForms(newForms));
    // };

    // const handleSend = () => {
    //     const newSelectedForm = { ...forms[index] };
    //     dispatch(setOpenStatus(true));
    //     dispatch(setSelectedForm(newSelectedForm));
    // };

    const handleOpenModal = e => {
        const ElementPosition = e.target.getBoundingClientRect();

        setPosition(ElementPosition.top);
        setIsOpen(true);
    };

    const handleCloseModal = e => {
        setIsOpen(false);
    };

    return (
        <li className='reports-item'>
            <div className='reports-item__content'>
                <p className='reports-item__status'>Изучен</p>
                <h2 className='reports-item__title'>Регламент о регламентах</h2>
                <p className='reports-item__access'>Всем сотрудникам</p>
                <button className='reports-item__button-open-report'>
                    Посмотреть
                </button>
                <OpenModalIcon
                    className={'reports-item__button-open-modal'}
                    onClick={handleOpenModal}
                />
                <div
                    className={`reports-item__modal ${
                        isOpen && 'reports-item__modal_active'
                    }`}
                    style={{ top: position }}
                    onClick={handleCloseModal}
                >
                    <div
                        className='reports-item__modal-content'
                        onClick={e => e.stopPropagation()}
                    >
                        <button className='reports-item__button-edit'>
                            Редактировать
                        </button>
                        <button className='reports-item__button-delete'>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ReportsItem;
