import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper';
import 'swiper/css';
// import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {
    constructorSlide,
    notificationsSlide,
    reportsSlide,
} from '../../assets';
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
            modules={[EffectFade, Navigation]}
            slidesPerView={1}
            speed={500}
            navigation
            effect='fade'
        >
            {slides.map((slide, index) => (
                <SwiperSlide>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
