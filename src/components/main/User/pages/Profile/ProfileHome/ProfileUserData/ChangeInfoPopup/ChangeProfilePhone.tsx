import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import {
    setOpenStatus,
    updateStatusCode,
    updateStatusText,
} from '../../../../../../../../store/actions/statusPopupActions';
import { resetPopup } from '../../../../../../../../store/actions/userProfileActions';

const ChangeProfilePhone = () => {
    const { profile } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(JSON.stringify(data));
        try {
            dispatch(resetPopup());
            dispatch(setOpenStatus(true));
            dispatch(updateStatusCode('loader'));
            setTimeout(() => {
                dispatch(updateStatusCode('200'));
                dispatch(updateStatusText('Номер телефона успешно изменен'));
            }, 2 * 1000);
        } catch (error) {}
    };

    const regEx = /^((\+7|7|8)+([0-9]){10})$/g;

    const validations = {
        required: 'Заполните это поле',
        pattern: {
            value: regEx,
            message: 'Некорректный формат номера телефона',
        },
        minLength: {
            value: 12,
            message: 'Номер слишком короткий',
        },
    };

    const handleDefault = () => {
        let value = '';

        profile.userData.find(item => {
            if (item.type === 'phone') {
                value = item.value;
            }
        });

        return value;
    };

    return (
        <form className='user-data-edit' onSubmit={handleSubmit(onSubmit)}>
            <p className='user-data-edit__header'>Изменение номера телефона</p>
            <div className='user-data-edit__field'>
                <input
                    className={`user-data-edit__input${
                        isValid ? '' : ' user-data-edit_invalid'
                    }`}
                    defaultValue={handleDefault()}
                    {...register('phone', validations)}
                />
            </div>

            <div className='user-data-edit__error'>
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <input
                className='user-data-edit__button'
                type='submit'
                disabled={!isValid}
            />
        </form>
    );
};

export default ChangeProfilePhone;
