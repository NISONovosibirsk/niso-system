import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';

//images import
import { slide1, slide2, slide3, slide4, smoke } from '../assets';

const Slider = () => {
    return (
        <section className='showcase'>
            <h2 className='showcase__header'>
                NI<span>SO</span>
            </h2>

            <div className='showcase__content-wrapper'>
                <div className='showcase__content'>
                    <Swiper
                        modules={[Navigation, Zoom]}
                        loop={true}
                        slidesPerView={3}
                        speed={1800}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.showcase-navigation__next',
                            prevEl: '.showcase-navigation__prev',
                        }}
                    >
                        <div className='showcase-carousel'>
                            <div className='swiper-wrapper'>
                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide1})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide1})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>First</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide2})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide2})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Second</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide3})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide3})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Third</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide4})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    style={{
                                                        backgroundImage: `url(${slide4})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Fourth</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>

                        <div className='showcase-navigation'>
                            <div className='showcase-navigation__prev'></div>
                            <div className='showcase-navigation__next'></div>
                        </div>
                    </Swiper>
                </div>
            </div>

            <video
                src={smoke}
                className='showcase__video'
                autoPlay={true}
                loop={true}
                muted={true}
            ></video>
        </section>
    );
};

export default Slider;
