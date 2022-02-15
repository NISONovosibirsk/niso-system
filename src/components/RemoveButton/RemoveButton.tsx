import { removeButtonIcon } from '../../assets';
import './RemoveButton.scss';

const RemoveButton = ({ onClick, type }: { onClick: any; type?: string }) => {
    return (
        <img
            className={`remove-button remove-button_${type}`}
            alt=''
            onClick={onClick}
            src={removeButtonIcon}
        ></img>
    );
};

export default RemoveButton;
