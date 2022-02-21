import './Button.scss';
import { IButton } from '../../interfaces';

const Button = ({ title, types, onClick }: IButton) => {
    return (
        <button
            onClick={onClick}
            className={`button ${types?.reduce(
                (acc, type) => `button_type_${type} ` + acc,
                ''
            )}`}
        >
            {title}
        </button>
    );
};

export default Button;
