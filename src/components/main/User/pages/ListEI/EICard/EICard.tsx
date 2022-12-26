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
                        <span className='ei-card__span'>Наименование ОО: </span>
                        {ei.name}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Тип: </span>
                        {ei.type}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Полное наименование ОО:{' '}
                        </span>
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
                        <span className='ei-card__span'>Район/Округ: </span>
                        {ei.district}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            {ei.type === 'ДОУ' ? 'Заведующий: ' : 'Директор: '}
                        </span>
                        {ei.director}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Адрес: </span>
                        {ei.address}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>Адрес сайта: </span>
                        {ei.siteAddress}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Сведения об образовательных программах:{' '}
                        </span>
                        {ei.programmsInfo}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Общее образование:{' '}
                        </span>
                        {ei.mainDO}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Профессиональное обучение:{' '}
                        </span>
                        {ei.mainNooOoSo}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Дополнительное образование (дополнительные
                            общеобразовательные программы):{' '}
                        </span>
                        {ei.additional}
                    </p>
                    <p className='ei-card__text'>
                        <span className='ei-card__span'>
                            Дополнительное образование (дополнительные
                            профессиональные программы):{' '}
                        </span>
                        {ei.additionalPro}
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
