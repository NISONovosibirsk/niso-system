import { useDispatch } from 'react-redux';
import {
    CalculateIcon,
    ImageIcon,
    ListIcon,
    TextIcon,
    TitleH1Icon,
} from '../../../../../../../../assets';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    setIsOpen,
    updateElements,
} from '../../../../../../../../store/actions/userConstrucorActions';
import { Popup } from '../../../../../../../support';
import './ReportCreatePopup.scss';

const ReportCreatePopup = () => {
    const { elements, popup } = useTypeSelector(
        state => state.userConstructor.create
    );
    const dispatch = useDispatch();

    const handleAddElement = element => {
        dispatch(updateElements([...elements, { ...element }]));
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
                        onClick={() =>
                            handleAddElement({
                                type: 'text',
                                values: [''],
                                placeholder: 'текст',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h1',
                                value: '',
                                placeholder: 'заголовок 1 уровня',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h2',
                                value: '',
                                placeholder: 'заголовок 2 уровня',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h3',
                                value: '',
                                placeholder: 'заголовок 3 уровня',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h4',
                                value: '',
                                placeholder: 'заголовок 4 уровня',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h5',
                                value: '',
                                placeholder: 'заголовок 5 уровня',
                            })
                        }
                    />
                    <TitleH1Icon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'h6',
                                value: '',
                                placeholder: 'заголовок 6 уровня',
                            })
                        }
                    />
                    <ImageIcon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({ type: 'image', image: '' })
                        }
                    />
                    <ListIcon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'textList',
                                values: ['', ''],
                            })
                        }
                    />
                    <CalculateIcon
                        className='report-create-popup__icon'
                        onClick={() =>
                            handleAddElement({
                                type: 'calculate',
                                values: [],
                            })
                        }
                    />
                </div>
                <ul className='report-create-popup__elements-list'>
                    {popup.elements.map((element, index) => {
                        switch (element.type) {
                            case 'checkbox':
                            case 'radio':
                                return (
                                    <li
                                        className={`report-create-popup__elements-item report-create-popup__elements-item_${element.type}`}
                                        onClick={() =>
                                            handleAddElement(element)
                                        }
                                        key={index}
                                    >
                                        <div></div>
                                        {element.name}
                                    </li>
                                );

                            default:
                                return (
                                    <li
                                        className='report-create-popup__elements-item'
                                        onClick={() =>
                                            handleAddElement(element)
                                        }
                                        key={index}
                                    >
                                        {element.name}
                                    </li>
                                );
                        }
                    })}
                </ul>
            </div>
        </Popup>
    );
};

export default ReportCreatePopup;
