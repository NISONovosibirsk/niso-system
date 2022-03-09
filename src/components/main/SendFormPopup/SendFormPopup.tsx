import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import './SendFormPopup.scss';
import schoolsList from '../../../assets/mock.json';
import SchoolsListItem from './SchoolsListItem/SchoolsListItem';
import {
    setOpenStatus,
    updateErrorMessage,
    updateFilterChars,
    updateSelectedSchools,
} from '../../../store/actions/sendFormPopupActions';
import { useNavigate } from 'react-router-dom';
import { setOpenedForm } from '../../../store/actions/reportsFormsListActions';
import { Button, Popup } from '../../support';

const SendFormPopup = () => {
    const { isOpen, errorMessage, filterChars, selectedSchools, selectedForm } =
        useTypeSelector(state => state.sendFormPopup);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredSchoolList = schoolsList.filter(school =>
        JSON.stringify(school).toLowerCase().includes(filterChars.toLowerCase())
    );

    const handleClose = () => {
        dispatch(setOpenStatus(false));
        dispatch(updateFilterChars(''));
        dispatch(updateSelectedSchools([]));
        dispatch(updateErrorMessage(''));
    };

    const handleChangeFilterChars = e => {
        dispatch(updateFilterChars(e.target.value));
        dispatch(
            updateErrorMessage(
                schoolsList.filter(school =>
                    JSON.stringify(school)
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                ).length
                    ? ''
                    : 'Ничего не найдено'
            )
        );
    };

    const handleSelectedSchools = school => {
        const newSelectedSchools = [...selectedSchools];

        if (selectedSchools.includes(school)) {
            newSelectedSchools.splice(newSelectedSchools.indexOf(school), 1);
        } else {
            newSelectedSchools.push(school);
        }

        dispatch(updateSelectedSchools(newSelectedSchools));
    };

    const handleSend = () => {
        dispatch(setOpenedForm({ ...selectedForm }));
        navigate('/client');
    };

    return (
        <Popup onClose={handleClose} isOpen={isOpen}>
            <div className='send-form-popup'>
                <input
                    className='send-form-popup__input'
                    placeholder='Поиск по школам'
                    onChange={handleChangeFilterChars}
                    value={filterChars}
                />
                <span className='send-form-popup__error-message'>
                    {errorMessage}
                </span>
                <ul className='send-form-popup__list'>
                    {filteredSchoolList.map((school, index) => {
                        const isChecked = selectedSchools.includes(school);
                        return (
                            <SchoolsListItem
                                school={school}
                                isChecked={isChecked}
                                onChange={handleSelectedSchools}
                                key={index}
                            />
                        );
                    })}
                </ul>
                <Button
                    title='Отправить'
                    filled={true}
                    margin='0 10%'
                    width='80%'
                    isDisabled={!selectedSchools.length}
                    onClick={handleSend}
                />
            </div>
        </Popup>
    );
};

export default SendFormPopup;
