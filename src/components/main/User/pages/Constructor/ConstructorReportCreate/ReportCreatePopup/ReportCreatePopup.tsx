import { useDispatch } from 'react-redux';
import {
    ImageIcon,
    ListIcon,
    TextIcon,
    TitleH1Icon,
} from '../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import {
    setIsOpen,
    updateElements,
} from '../../../../../../../store/actions/userConstrucorActions';
import { Popup } from '../../../../../../support';
import './ReportCreatePopup.scss';

const ReportCreatePopup = () => {
    const { elements, popup } = useTypeSelector(
        state => state.userConstructor.create
    );
    const dispatch = useDispatch();

    const handleAddSupportElement = type => {
        dispatch(updateElements([...elements, { type, value: '' }]));
    };

    const handleAddMainElement = element => {
        dispatch(updateElements([...elements, element]));
    };

    const handleClose = () => {
        dispatch(setIsOpen(false));
    };

    return (
        <Popup onClose={handleClose} isOpen={popup.isOpen}>
            <div className='report-create-popup'>
                <div className='report-create-popup__icons'>
                    <TextIcon
                        className='report-create-popup__icon'
                        onClick={() => handleAddSupportElement('text')}
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() => handleAddSupportElement('h1')}
                    />
                    <ImageIcon
                        className='report-create-popup__icon'
                        onClick={() => handleAddSupportElement('image')}
                    />
                    <ListIcon
                        className='report-create-popup__icon'
                        onClick={() => handleAddSupportElement('textList')}
                    />
                </div>
                <ul className='report-create-popup__elements-list'>
                    {popup.elements.map((element, index) => (
                        <li
                            className='report-create-popup__elements-item'
                            onClick={() => handleAddMainElement(element)}
                            key={index}
                        >
                            {element.placeholder}
                        </li>
                    ))}
                </ul>
            </div>
        </Popup>
    );
};

export default ReportCreatePopup;
