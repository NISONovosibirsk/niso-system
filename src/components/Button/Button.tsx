import './Button.scss';
import { IButton } from '../../interfaces';

const Button = ({ title = '', type = '', onClick }: IButton) => {
    return (
        <button onClick={onClick} className={`button button_type_${type}`}>
            {title}
        </button>
    );
};

export default Button;
