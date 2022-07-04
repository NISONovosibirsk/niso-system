import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../../../../../../../store/actions/statusPopupActions';
import { resetPopup } from '../../../../../../../../../store/actions/userProfileActions';

const ChangeProfileEmail = () => {
    const { profile } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useFormContext();

    const onSubmit = data => {
        console.log(JSON.stringify(data));
        try {
            dispatch(resetPopup());
            dispatch(setOpenStatus(true));
            dispatch(updateStatusCode('loader'));
            setTimeout(() => {
                dispatch(updateStatusCode('200'));
                dispatch(
                    updateStatusText('Адрес электронной почты успешно изменен')
                );
            }, 2 * 1000);
        } catch (error) {}
    };

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const validations = {
        required: 'Заполните это поле',
        pattern: {
            value: regEx,
            message: 'Некорректный формат адреса почты',
        },
        minLength: {
            value: 10,
            message: 'Адрес слишком короткий',
        },
    };

    const handleDefault = () => {
        let value = '';

        profile.userData.find(item => {
            if (item.type === 'email') {
                value = item.value;
            }
        });

        return value;
    };

    return (
        <form className='user-data-edit' onSubmit={handleSubmit(onSubmit)}>
            <p className='user-data-edit__header'>
                Изменение адреса электронной почты
            </p>

            <div className='user-data-edit__field'>
                <input
                    className={`user-data-edit__input ${
                        errors.email ? 'user-data-edit__input-invalid' : ''
                    }`}
                    defaultValue={handleDefault()}
                    {...register('email', validations)}
                />
            </div>
            <span className='user-data-edit__error'>
                {errors.email && errors.email.message}
            </span>
            <input
                className='user-data-edit__button'
                type='submit'
                disabled={!isValid}
            />
        </form>
    );
};

export default ChangeProfileEmail;
