// source import
import { smoke } from '../../assets';

const Video = () => {
    return (
        <video
            src={smoke}
            className='showcase__video'
            autoPlay={true}
            loop={true}
            muted={true}
        ></video>
    );
};

export default Video;
