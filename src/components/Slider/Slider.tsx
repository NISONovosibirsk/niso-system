import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// components import
import { Item, Video } from '..';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';

// source import
import { slide1, slide2, slide3, slide4 } from '../../assets';
import { useState } from 'react';

const Slider = () => {
    // temporary state with slider content
    const [slides, setSlide] = useState([slide1, slide2, slide3, slide4]);

    return (
        <section className='showcase'>
            <h2 className='showcase__header'>
                NI<span>SO</span>
            </h2>

            <div className='showcase__content-wrapper'>
                <div className='showcase__content'>
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        slidesPerView={3}
                        speed={500}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.showcase-navigation__next',
                            prevEl: '.showcase-navigation__prev',
                        }}
                    >
                        <div className='showcase-carousel'>
                            <div className='swiper-wrapper'>
                                {slides.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        {({isActive})=>(
                                            isActive ? <Item active={true} image={item}/> : <Item active={false} image={item}/>
                                        )}
                                    </SwiperSlide>
                                ))}
                            </div>
                        </div>

                        <div className='showcase-navigation'>
                            <div className='showcase-navigation__prev'></div>
                            <div className='showcase-navigation__next'></div>
                        </div>
                    </Swiper>
                </div>
            </div>

            <Video />
        </section>
    );
};

export default Slider;
