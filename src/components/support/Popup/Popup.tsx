import './Popup.scss';

const Popup = ({
    onClose,
    isOpen,
    children,
}: {
    onClose: any;
    isOpen: boolean;
    children: any;
}) => (
    <div className={`popup ${isOpen && 'popup_open'}`} onMouseDown={onClose}>
        <div className='popup__content' onMouseDown={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default Popup;
