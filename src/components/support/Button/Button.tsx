import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = ({
    onClick,
    isDisabled,
    title,
    filled,
    width,
    margin,
}: IButton) => {
    return (
        <button
            className={`button ${filled ? 'button_type_filled' : ''}`}
            onClick={onClick}
            disabled={isDisabled}
            style={{ width: width, margin: margin }}
        >
            {title}
        </button>
    );
};

export default Button;
