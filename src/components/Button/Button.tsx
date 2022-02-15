import './Button.scss';
import { IButton } from '../../interfaces';

const Button = ({ title, mod, onClick }: IButton) => {
    return (
        <button
            onClick={onClick}
            className={`button button_type_${mod}`}
        >
            {title}
        </button>
    );
};

export default Button;
