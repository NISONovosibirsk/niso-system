import { useSwiper } from 'swiper/react';
import { notificationsSlide } from '../../../assets';

const NotificationsSlide = () => {
    const swiper = useSwiper();

    const handleSlide = index => {
        swiper.slideTo(index);
    };

    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${notificationsSlide})` }}
        >
            <div className='banner__other'>
                <span
                    className='banner__link'
                    onClick={() => {
                        handleSlide(0);
                    }}
                >
                    конструктор
                </span>
            </div>
            <div className='banner__other'>
                <span
                    className='banner__link'
                    onClick={() => {
                        handleSlide(1);
                    }}
                >
                    отчеты
                </span>
            </div>
            <div className='banner__current'>
                <p className='banner__title'>коммуникации</p>
                <p className='banner__text'>Смотрите оповещения</p>
                <p className='banner__caption'>
                    Коммуникация по всем уровням доступа
                </p>
                <button className='banner__button'>Вперед</button>
            </div>
        </div>
    );
};

export default NotificationsSlide;
