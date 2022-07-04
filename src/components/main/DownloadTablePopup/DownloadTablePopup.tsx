import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import {
    setDownloadIsOpen,
    updateTargetReport,
} from '../../../store/actions/userConstrucorActions';
import { Popup } from '../../support';
import './DownloadTablePopup.scss';

const DownloadTablePopup = () => {
    const { targetReport, downloadIsOpen } = useTypeSelector(
        state => state.userConstructor.createdReports
    );
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setDownloadIsOpen(false));
        setTimeout(dispatch, 250, updateTargetReport({}));
    };

    const handleRows = (element, i) => {
        switch (element.type) {
            case 'text':
                return (
                    <>
                        <tr key={i + 'text'}>
                            <td style={{ border: '1px solid black' }}></td>
                            {element.values.map(value => (
                                <td style={{ border: '1px solid black' }}>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    </>
                );
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                return (
                    <tr key={i}>
                        <td
                            style={{
                                fontSize: `${
                                    28 - 2 * parseInt(element.type.match(/\d+/))
                                }px`,
                                textAlign: 'center',
                                border: '1px solid black',
                            }}
                            colSpan={2}
                        >
                            {element.value}
                        </td>
                    </tr>
                );
            case 'textList':
                return element.values.map((value, index) => (
                    <tr key={i + '' + index + 'textList'}>
                        <td style={{ border: '1px solid black' }} colSpan={2}>
                            {value}
                        </td>
                    </tr>
                ));
            case 'checkbox':
                return (
                    <tr key={i}>
                        <td style={{ border: '1px solid black' }}>
                            {element.title}
                        </td>
                        <td style={{ border: '1px solid black' }}>
                            {element.isChecked ? '✓' : '✗'}
                        </td>
                    </tr>
                );
            case 'radio':
                return element.radios.map((radio, index) => (
                    <tr key={i + '' + index + 'radio'}>
                        <td style={{ border: '1px solid black' }}>
                            {radio.title}
                        </td>
                        <td style={{ border: '1px solid black' }}>
                            {radio.isChecked ? '✓' : '✗'}
                        </td>
                    </tr>
                ));

            default:
                return (
                    <tr key={i}>
                        <td style={{ border: '1px solid black' }}>
                            {element.placeholder}
                        </td>
                        {element.values.map(value => (
                            <td style={{ border: '1px solid black' }}>
                                {value}
                            </td>
                        ))}
                    </tr>
                );
        }
    };

    return (
        <Popup onClose={handleClose} isOpen={downloadIsOpen}>
            <div className='download-table-popup'>
                <table id='table'>
                    <tbody>
                        <tr>
                            <th
                                style={{ background: '#0f0', fontSize: '24px' }}
                                colSpan={2}
                            >
                                {targetReport.title &&
                                    `${targetReport.title.value} ${targetReport.subtitle.value}`}
                            </th>
                        </tr>
                        <tr>
                            <th colSpan={2}></th>
                        </tr>
                        {targetReport.elements &&
                            targetReport.elements.map((element, i) =>
                                handleRows(element, i)
                            )}
                    </tbody>
                </table>
                <ReactHTMLTableToExcel
                    className='download-table-popup__button'
                    table={'table'}
                    buttonText='Скачать'
                    filename={
                        targetReport.title ? targetReport.title.value : ''
                    }
                    sheet={targetReport.title ? targetReport.title.value : ''}
                />
            </div>
        </Popup>
    );
};

export default DownloadTablePopup;
