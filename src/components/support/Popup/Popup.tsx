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
    <div className={`popup ${isOpen && 'popup_open'}`} onClick={onClose}>
        <div className='popup__content' onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default Popup;
