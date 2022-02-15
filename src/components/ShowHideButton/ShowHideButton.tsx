import { HideResults, ShowResults } from '../../assets';
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
            src={isShow ? HideResults : ShowResults}
        ></img>
    );
};

export default ShowHideButton;
