import './EICard.scss';

const EICard = ({ ei }) => {
    return (
        <li className='ei-card'>
            <p>Название: {ei.name}</p>
            <p>Район: {ei.district}</p>
            <p>Адресс: {ei.currentAddress}</p>
            <p>ИНН: {ei.inn}</p>
            <p>ОРГН: {ei.orgn}</p>
        </li>
    );
};

export default EICard;
