import { useForm } from 'react-hook-form';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';

const ChangeProfileEmail = () => {
    const { profile } = useTypeSelector(state => state.userProfile);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(errors);
        console.log(JSON.stringify(data));
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
                    className={`user-data-edit__input${
                        isValid ? '' : ' user-data-edit_invalid'
                    }`}
                    defaultValue={handleDefault()}
                    {...register('email', validations)}
                />
            </div>

            <div className='user-data-edit__error'>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <input
                className='user-data-edit__button'
                type='submit'
                disabled={!isValid}
            />
        </form>
    );
};

export default ChangeProfileEmail;
