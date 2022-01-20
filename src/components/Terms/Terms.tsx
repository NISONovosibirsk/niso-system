import React from 'react';
import './Terms.scss';
import Button from '../Button/Button';

export interface ButtonsArray {
  [index: number]: { title: string; type?: string; onClick?: Function };
}

const Terms = ({
  title,
  buttons,
}: {
  title: string;
  buttons: ButtonsArray[];
}) => {
  console.log(buttons);
  return (
    <div className='terms'>
      <p className='terms__title'>{title}</p>
      {buttons.map((button, index) => (
        <Button
          key={index}
          title={button.title}
          type={button.type}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

export default Terms;
