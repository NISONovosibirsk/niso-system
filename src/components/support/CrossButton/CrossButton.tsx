import { crossIcon } from '../../../assets';
import './CrossButton.scss';

const CrossButton = ({ onClick, type }: { onClick: any; type?: string }) => {
    return (
        <img
            className={`cross-button cross-button_${type}`}
            alt=''
            onClick={onClick}
            src={crossIcon}
        ></img>
    );
};

export default CrossButton;
