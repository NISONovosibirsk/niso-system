import './ImageInput.scss';

const ImageInput = ({ element, onUpdateElement, elementIndex }) => {
    const handleDeleteImage = () => {
        element.image = '';

        onUpdateElement(element, elementIndex);
    };

    const handleAddImage = e => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            element.image = URL.createObjectURL(img);
        }

        onUpdateElement(element, elementIndex);
    };

    return element.image ? (
        <div className='image-input__field'>
            <p className='image-input__button' onClick={handleDeleteImage}>
                - Удалить изображение
            </p>
            <img
                className='image-input__image'
                src={element.image}
                alt='загруженное'
            ></img>
        </div>
    ) : (
        <label className='image-input__button'>
            + Добавить изображение
            <input
                className='image-input__input'
                onChange={handleAddImage}
                type='file'
                placeholder='Изображение'
            />
        </label>
    );
};

export default ImageInput;
