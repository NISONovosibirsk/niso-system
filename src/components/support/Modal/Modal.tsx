import './Modal.scss';

const Modal = ({ onClose, isOpen, position, children, type = '' }) => {
    return (
        <div
            className={`modal ${isOpen && 'modal_active'}`}
            style={{
                paddingTop: position.top,
                paddingLeft: position.left,
            }}
            onClick={onClose}
        >
            <ul
                className={`modal__content ${
                    type ? `modal__content_${type}` : ''
                }`}
                onClick={e => e.stopPropagation()}
            >
                {children.map((button, index) => (
                    <li
                        className={`modal__item ${
                            type ? `modal__item_${type}` : ''
                        }`}
                        key={index}
                    >
                        {button}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Modal;
