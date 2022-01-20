import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';

//images import
import { slide1, slide2, slide3, slide4 } from '../assets';

const Slider = () => {
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
                                                    // style='background-image: url(images/1.png);'
                                                    style={{
                                                        backgroundImage: `url(${slide1})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/1.png);'
                                                    style={{
                                                        backgroundImage: `url(${slide1})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Front</p>
                                    </div>
                                </SwiperSlide>

                                {/* <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/2.png);'
                                                    style={{
                                                        backgroundImage: slide2,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/2.png);'
                                                    style={{
                                                        backgroundImage: slide2,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Front Two</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/3.png);'
                                                    style={{
                                                        backgroundImage: slide3,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/3.png);'
                                                    style={{
                                                        backgroundImage: slide3,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Side</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-slide showcase-carousel__item'>
                                        <div className='showcase-carousel__image-wrapper'>
                                            <div className='showcase-carousel__image-left'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/4.png);'
                                                    style={{
                                                        backgroundImage: slide4,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className='showcase-carousel__image-right'>
                                                <div
                                                    className='showcase-carousel__image'
                                                    // style='background-image: url(images/4.png);'
                                                    style={{
                                                        backgroundImage: slide4,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p>Back</p>
                                    </div>
                                </SwiperSlide> */}
                            </div>
                        </div>

                        <div className='showcase-navigation'>
                            <div className='showcase-navigation__prev'></div>
                            <div className='showcase-navigation__next'></div>
                        </div>
                    </Swiper>
                </div>
            </div>

            {/* <video
                src='videos/smoke-background-optimized.mp4'
                className='showcase__video'
                autoplay
                loop
                muted
            ></video> */}
        </section>
    );
};

export default Slider;
