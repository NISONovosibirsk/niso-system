import { notificationsSlide } from '../../../assets';

const NotificationsSlide = ({}) => {
    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${notificationsSlide})` }}
        >
            <div className='banner__other'>конструктор</div>
            <div className='banner__other'>отчеты</div>
            <div className='banner__current'>
                <p className='banner__title'>коммуникации</p>
                <p className='banner__text'>Смотрите оповещения</p>
                <p className='banner__caption'>Коммуникация по всем уровням доступа</p>
                <button className='banner__button'>Вперед</button>
            </div>
        </div>
    );
};

export default NotificationsSlide;
