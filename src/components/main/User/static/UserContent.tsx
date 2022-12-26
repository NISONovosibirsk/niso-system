import { Link } from 'react-router-dom';

import pdfIcon from '../../../../assets/icons/commonIcons/pdf-color.svg';
import myPDF1 from '../../../../assets/pdf/organization_questions.pdf';
import myPDF2 from '../../../../assets/pdf/project_school.pdf';

const UserContent = () => {
  return (
    <>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF1} target='_blank'>Организационные вопросы проведения оценки</Link>
      </div>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF2} target='_blank'>Проект_Школа Минпросвещения России</Link>
      </div>
    </>
  );
}

export default UserContent;
