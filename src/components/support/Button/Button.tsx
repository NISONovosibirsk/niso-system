import './Button.scss';
import { IButton } from '../../../interfaces';

const Button = ({
    onClick,
    isDisabled,
    title,
    type,
    width,
    height,
    margin,
}: IButton) => {
    return (
        <button
            className={`button${type?.length ? ` button_type_${type}` : ''}`}
            onClick={onClick}
            disabled={isDisabled}
            style={{ width: width, margin: margin, height: height }}
        >
            {title}
        </button>
    );
};

export default Button;
