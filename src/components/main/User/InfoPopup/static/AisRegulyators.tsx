import React from 'react';
import '../../InfoPopup/InfoPopup.scss';
import { Link } from 'react-router-dom';

import pdfIcon from '../../../../../assets/icons/commonIcons/pdf-color.svg';
import myPDF1 from '../../../../../assets/pdf/1letterminprosvet.pdf';
import myPDF2 from '../../../../../assets/pdf/2prilogeniekpismu.pdf';
import myPDF3 from '../../../../../assets/pdf/PrikazDO.pdf';
import myPDF4 from '../../../../../assets/pdf/PrikazDO_2.pdf';

const AisRegulyators = () => {
  return (
    <>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF1} target='_blank'>1. Письмо Минпросвещения РФ</Link>
      </div>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF2} target='_blank'>2. Приложение к письму</Link>
      </div>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF3} target='_blank'>Приказ ДО 24.03.22_0229 Мониторинг охвата системой допобразованием</Link>
      </div>
      <div className='documentWrapper'>
        <img className='pdfIcon' src={pdfIcon} alt="pdf" />
        <Link to={myPDF4} target='_blank'>Приказ ДО 25.07.22_0635 О результатах мониторинга охвата ДО</Link>
      </div>
    </>
  );
}

export default AisRegulyators;
