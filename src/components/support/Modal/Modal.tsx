import './Modal.scss';

const Modal = ({
    onClose,
    isOpen,
    position,
    children,
    activeButton = -1,
    type = '',
    style = {},
}) => {
    return (
        <div
            className={`modal ${isOpen && 'modal_active'}`}
            style={{
                ...style,
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
                {children.map((child, childIndex) =>
                    Array.isArray(child) ? (
                        child.map((item, itemIndex) => (
                            <li
                                className={`modal__item ${
                                    type ? `modal__item_${type}` : ''
                                } ${
                                    itemIndex === activeButton
                                        ? 'modal__item_active'
                                        : ''
                                }`}
                                key={itemIndex}
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <li
                            className={`modal__item ${
                                type ? `modal__item_${type}` : ''
                            }`}
                            key={childIndex}
                        >
                            {child}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Modal;
