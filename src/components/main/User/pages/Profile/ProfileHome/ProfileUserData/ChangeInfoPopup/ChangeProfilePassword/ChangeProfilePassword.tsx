import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../../../../../../../store/actions/statusPopupActions';
import { resetPopup } from '../../../../../../../../../store/actions/userProfileActions';
import ChangePasswordInputs from './ChangePasswordInputs';

const ChangeProfilePassword = () => {
    const methods = useForm({ mode: 'onChange' });
    const dispatch = useDispatch();
    const onSubmit = data => {
        console.log(JSON.stringify(data));
        try {
            dispatch(resetPopup());
            dispatch(setOpenStatus(true));
            dispatch(updateStatusCode('loader'));
            setTimeout(() => {
                dispatch(updateStatusCode('200'));
                dispatch(updateStatusText('Пароль успешно изменен'));
            }, 2 * 1000);
        } catch (error) {}
    };

    return (
        <FormProvider {...methods}>
            <form
                className='user-data-edit'
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <p className='user-data-edit__header'>Изменение пароля</p>
                <ChangePasswordInputs />
                <input
                    className='user-data-edit__button'
                    type='submit'
                    disabled={!methods.formState.isValid}
                />
            </form>
        </FormProvider>
    );
};

export default ChangeProfilePassword;
