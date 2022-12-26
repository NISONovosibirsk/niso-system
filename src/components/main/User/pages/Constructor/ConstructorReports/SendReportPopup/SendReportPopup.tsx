import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import SchoolsListItem from './SchoolsListItem/SchoolsListItem';
import { Popup } from '../../../../../../support';
import './SendReportPopup.scss';
import {
    setPopupIsOpen,
    updateTargetReport,
} from '../../../../../../../store/actions/userConstrucorActions';
import SendReportPopupSearchbar from './SendReportPopupFilter/SendReportPopupSearchbar';
import { listEIFilter } from '../../../../../../../middleware';

const SendReportPopup = () => {
    const { isOpen } = useTypeSelector(
        state => state.userConstructor.createdReports.sendReportPopup
    );
    const dispatch = useDispatch();
    const {
        cards,
        search: { chars, filter },
    } = useTypeSelector(state => state.userListEI);

    const handleClose = () => {
        dispatch(setPopupIsOpen(false));

        setTimeout(() => {
            dispatch(updateTargetReport({}));
        }, 300);
    };

    return (
        <Popup onClose={handleClose} isOpen={isOpen}>
            <div className='send-report-popup'>
                <SendReportPopupSearchbar />
                <ul className='send-report-popup__list'>
                    {listEIFilter(cards, chars, filter).map((school, index) => {
                        return <SchoolsListItem school={school} key={index} />;
                    })}
                </ul>
            </div>
        </Popup>
    );
};

export default SendReportPopup;
