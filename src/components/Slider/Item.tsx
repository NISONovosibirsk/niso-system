// separate slide in carousel

const Item = ({ image }: { image: any }) => {
    return (
        <div className='swiper-slide showcase-carousel__item'>
            <div className='showcase-carousel__image-wrapper'>
                <div className='showcase-carousel__image-left'>
                    <div
                        className='showcase-carousel__image'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                </div>
                <div className='showcase-carousel__image-right'>
                    <div
                        className='showcase-carousel__image'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Item;
