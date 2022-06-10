import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../../../../../../../store/actions/statusPopupActions';
import {
    resetPopup,
    updateProfileInfo,
} from '../../../../../../../../../store/actions/userProfileActions';
import ChangeNameInputs from './ChangeNameInputs';
import './ChangeProfileName.scss';

const ChangeProfileName = () => {
    const { popup, profile } = useTypeSelector(state => state.userProfile);

    const {
        formState: { isValid },
        handleSubmit,
    } = useFormContext();

    const dispatch = useDispatch();

    const handleData = data => {
        const newState = { ...profile };
        newState.name = `${data.name.trim()} ${data.lastName.trim()} ${data.patronymic.trim()}`;
        dispatch(updateProfileInfo(newState));
    };

    const onSubmit = data => {
        console.log(JSON.stringify(data));
        try {
            dispatch(resetPopup());
            dispatch(setOpenStatus(true));
            dispatch(updateStatusCode('loader'));
            setTimeout(() => {
                dispatch(updateStatusCode('200'));
                handleData(data);
                dispatch(updateStatusText('Данные успешно изменены'));
            }, 2 * 1000);
        } catch (error) {}
    };

    return (
        <form className='user-edit-name' onSubmit={handleSubmit(onSubmit)}>
            <p className='user-data-edit__header'>{popup.title}</p>
            <ChangeNameInputs />
            <input
                className='user-edit-password__button'
                type='submit'
                disabled={!isValid}
            />
        </form>
    );
};

export default ChangeProfileName;
