import { useSwiper } from 'swiper/react';
import { reportsSlide } from '../../../assets';

const ReportsSlide = () => {
    const swiper = useSwiper();

    const handleSlide = index => {
        swiper.slideTo(index);
    };

    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${reportsSlide})` }}
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
            <div className='banner__current'>
                <p className='banner__title'>отчеты</p>
                <p className='banner__text'>Отправляйте отчеты</p>
                <p className='banner__caption'>
                    Смотрите попвещения. Отправляйте отчеты. Выгружайте exel
                </p>
                <button className='banner__button'>вперед</button>
            </div>
            <div className='banner__other'>
                <span
                    className='banner__link'
                    onClick={() => {
                        handleSlide(2);
                    }}
                >
                    коммуникации
                </span>
            </div>
        </div>
    );
};

export default ReportsSlide;
