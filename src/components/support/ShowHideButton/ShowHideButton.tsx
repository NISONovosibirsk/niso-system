import { hideIcon, showIcon } from '../../../assets';
import './ShowHideButton.scss';

const ShowHideButton = ({
    isShow,
    onClick,
}: {
    isShow: boolean;
    onClick: any;
}) => {
    return (
        <img
            className='show-hide-button'
            alt=''
            onClick={onClick}
            src={isShow ? hideIcon : showIcon}
        ></img>
    );
};

export default ShowHideButton;
