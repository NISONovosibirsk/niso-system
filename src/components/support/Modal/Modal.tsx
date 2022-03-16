import './Modal.scss';

const Modal = ({ onClose, isOpen, padding, buttons }) => {
    padding.right = `calc(100vw - 240px - ${padding.right})`;
    padding.bottom = `calc(100vh - ${padding.bottom})`;

    return (
        <div
            className={`modal ${isOpen && 'modal_active'}`}
            style={{
                paddingTop: padding.top || padding.bottom,
                paddingLeft: padding.left || padding.right,
            }}
            onClick={onClose}
        >
            <ul className='modal__content' onClick={e => e.stopPropagation()}>
                {buttons.map((button, index) => (
                    <li className='modal__item' key={index}>
                        <button
                            className='modal__button'
                            onClick={button.onClick}
                        >
                            {button.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Modal;
