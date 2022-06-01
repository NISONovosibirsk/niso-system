import { constructorSlide } from '../../../assets';

const ConstructorSlide = ({}) => {
    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${constructorSlide})` }}
        >
            <div className='banner__current'>
                <p className='banner__title'>конструктор</p>
                <p className='banner__text'>Конструктор форм мониторинга качества образования</p>
                <p className='banner__caption'>Пользуйтесь инструментами создания форм отчетности</p>
                <button className='banner__button'>вперед</button>
            </div>
            <div className='banner__other'>отчеты</div>
            <div className='banner__other'>коммуникации</div>
        </div>
    );
};

export default ConstructorSlide;
