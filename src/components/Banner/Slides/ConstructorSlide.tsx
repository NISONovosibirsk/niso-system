import { constructorSlide } from '../../../assets';
import { useSwiper } from 'swiper/react';

const ConstructorSlide = () => {
    const swiper = useSwiper();

    const handleSlide = index => {
        swiper.slideTo(index);
    };

    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${constructorSlide})` }}
        >
            <div className='banner__current'>
                <p className='banner__title'>конструктор</p>
                <p className='banner__text'>
                    Конструктор форм мониторинга качества образования
                </p>
                <p className='banner__caption'>
                    Пользуйтесь инструментами создания форм отчетности
                </p>
                <button className='banner__button'>вперед</button>
            </div>
            <div className='banner__other' onClick={()=> {handleSlide(1)}}>
                <span className='banner__link'>отчеты</span>
            </div>
            <div className='banner__other' onClick={()=> {handleSlide(2)}}>
                <span className='banner__link'>коммуникации</span>
            </div>
        </div>
    );
};

export default ConstructorSlide;
