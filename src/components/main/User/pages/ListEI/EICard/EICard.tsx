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
                        <span className='ei-card__span'>
                            Вид деятельности: 
                        </span>
                        {ei.mainDO}
                    </p>
					<p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Образовательные программы:
                        </span>
                        {ei.mainNooOoSo}
                    </p>
					<p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Дополнительно:
                        </span>
                        {ei.additional}
                    </p>
                </>
            ) : (
                <>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Название: </span>
                        {ei.name}
                    </p>
                </>
            )}
        </li>
    );
};

export default EICard;
