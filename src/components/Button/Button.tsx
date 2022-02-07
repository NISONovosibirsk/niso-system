import './Button.scss';

const Button = ({
    title = '',
    type = '',
    onClick,
}: {
    title?: string;
    type?: string;
    onClick?: any;
}) => {
    return (
        <button onClick={onClick} className={`button button_type_${type}`}>
            {title}
        </button>
    );
};

export default Button;
