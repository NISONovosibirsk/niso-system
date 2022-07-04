import './ReportImage.scss';

const ReportImage = ({ element }) => {
    return (
        <img
            className='report-image'
            src={element.image}
            alt='загруженное'
        ></img>
    );
};

export default ReportImage;
