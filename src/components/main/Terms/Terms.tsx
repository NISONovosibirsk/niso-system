import { Button } from '../../support';
import './Terms.scss';
import { ITerms } from '../../../interfaces';

const Terms = ({ title, buttons }: ITerms) => {
    return (
        <div className='terms'>
            <p className='terms__title'>{title}</p>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    title={button.title}
                    filled={button.isFilled}
                    onClick={button.onClick}
                />
            ))}
        </div>
    );
};

export default Terms;
