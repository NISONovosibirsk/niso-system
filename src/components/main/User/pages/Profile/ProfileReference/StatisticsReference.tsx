import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../../store/actions/userProfileActions';
import { Button } from '../../../../../support';

const StatisticsReference = () => {
    const { reference } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = { ...reference };
        newState.isOpen = false;
        dispatch(updateReference(newState));
    };

    return (
        <div className='user-profile-reference'>
            <p className='user-profile-reference__title'>
                Статистика по пользователям
            </p>
            <p className='user-profile-reference__text'>
                В данном разделе можно увидеть данные по сотрудникам компании,
                зарегистрированным в системе Квант. Сотрудников: общее
                количество сотрудников, зарегистрированное в системе.
                Руководителей: количество сотрудников, которые на ОФС стоят в
                роли администраторов. Заходило сегодня: количество сотрудников,
                которые сегодня заходили в систему.
            </p>
            <Button onClick={handleClose} title={'Изучил👍'} width={'205px'} />
        </div>
    );
};

export default StatisticsReference;
