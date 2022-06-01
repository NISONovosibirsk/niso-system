import { reportsSlide } from '../../../assets';

const ReportsSlide = ({}) => {
    return (
        <div
            className='banner__slide'
            style={{ backgroundImage: `url(${reportsSlide})` }}
        >
            <div className='banner__other'>конструктор</div>
            <div className='banner__current'>
                <p className='banner__title'>отчеты</p>
                <p className='banner__text'>Отправляйте отчеты</p>
                <p className='banner__caption'>Смотрите попвещения. Отправляйте отчеты. Выгружайте exel</p>
                <button className='banner__button'>вперед</button>
            </div>
            <div className='banner__other'>коммуникации</div>
        </div>
    );
};

export default ReportsSlide;
