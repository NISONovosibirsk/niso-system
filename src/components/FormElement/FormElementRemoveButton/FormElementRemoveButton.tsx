import { removeButtonIcon } from '../../../assets';
import './FormElementRemoveButton.scss';

const FormElementRemoveButton = ({ onClick }: { onClick: any }) => {
    return (
        <img
            className='form-element-remove-button'
            alt=''
            onClick={onClick}
            src={removeButtonIcon}
        ></img>
    );
};

export default FormElementRemoveButton;
