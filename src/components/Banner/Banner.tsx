import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Banner.scss';
import ConstructorSlide from './Slides/ConstructorSlide';
import ReportsSlide from './Slides/ReportsSlide';
import NotificationsSlide from './Slides/NotificationsSlide';

const Banner = () => {
    const slides = [
        <ConstructorSlide />,
        <ReportsSlide />,
        <NotificationsSlide />,
    ];

    return (
        <Swiper
            className='banner'
            modules={[EffectFade]}
            slidesPerView={1}
            speed={450}
            effect='fade'
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
