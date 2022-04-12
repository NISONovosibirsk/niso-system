import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../hooks/useTypeSelector';
import schoolsList from '../../../../../../../assets/mock.json';
import SchoolsListItem from './SchoolsListItem/SchoolsListItem';
import { Popup } from '../../../../../../support';
import './SendReportPopup.scss';
import {
    setPopupIsOpen,
    updatePopupFilterChars,
    updateTargetReport,
} from '../../../../../../../store/actions/userConstrucorActions';

const SendReportPopup = () => {
    const { isOpen, filterChars } = useTypeSelector(
        state => state.userConstructor.createdReports.sendReportPopup
    );
    const dispatch = useDispatch();

    const filteredSchoolList = schoolsList.filter(school =>
        JSON.stringify(school)
            .toLowerCase()
            .includes(filterChars.value.toLowerCase())
    );

    const handleClose = () => {
        dispatch(setPopupIsOpen(false));

        setTimeout(() => {
            dispatch(updateTargetReport({}));
            dispatch(updatePopupFilterChars({ value: '', error: '' }));
        }, 300);
    };

    const handleChangeFilterChars = e => {
        const { value } = e.target;
        dispatch(
            updatePopupFilterChars({
                value,
                error: schoolsList.filter(school =>
                    JSON.stringify(school)
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                ).length
                    ? ''
                    : 'Ничего не найдено',
            })
        );
    };

    return (
        <Popup onClose={handleClose} isOpen={isOpen}>
            <div className='send-report-popup'>
                <input
                    className='send-report-popup__input'
                    placeholder='Поиск по школам'
                    onChange={handleChangeFilterChars}
                    value={filterChars.value}
                />
                <span className='send-report-popup__error-message'>
                    {filterChars.error}
                </span>
                <ul className='send-report-popup__list'>
                    {filteredSchoolList.map((school, index) => {
                        return <SchoolsListItem school={school} key={index} />;
                    })}
                </ul>
            </div>
        </Popup>
    );
};

export default SendReportPopup;
