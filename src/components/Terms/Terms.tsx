import { Button } from '..';
import './Terms.scss';

export interface ButtonsArray {
    [index: number]: {};
    title: string;
    type?: string;
    onClick?: Function;
}

const Terms = ({
    title,
    buttons,
}: {
    title: string;
    buttons: ButtonsArray[];
}) => {
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
