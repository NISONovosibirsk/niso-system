import { useState } from 'react';
import './EICard.scss';

const EICard = ({ ei }) => {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => setIsHover(!isHover);

    return (
        <li
            className='ei-card'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {isHover ? (
                <>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Название: </span>
                        {ei.name}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Полное название: </span>
                        {ei.fullname}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>ОГРН: </span>
                        {ei.orgn}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>ИНН: </span>
                        {ei.inn}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>КПП: </span>
                        {ei.kpp}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Директор: </span>
                        {ei.director}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Фактический адрес:{' '}
                        </span>
                        {ei.currentAddress}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Телефон: </span>
                        {ei.phoneNumber}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Почта: </span>
                        {ei.email}
                    </p>
                </>
            ) : (
                <>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Название: </span>
                        {ei.name}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Директор: </span>
                        {ei.director}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Телефон: </span>
                        {ei.phoneNumber}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Почта: </span>
                        {ei.email}
                    </p>
                </>
            )}
        </li>
    );
};

export default EICard;
