import { Button } from '..';
import './Terms.scss';
import { ITerms } from '../../interfaces';

const Terms = ({ title, buttons }: ITerms) => {
    return (
        <div className='terms'>
            <p className='terms__title'>{title}</p>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    title={button.title}
                    mod={button.type}
                    onClick={button.onClick}
                />
            ))}
        </div>
    );
};

export default Terms;
