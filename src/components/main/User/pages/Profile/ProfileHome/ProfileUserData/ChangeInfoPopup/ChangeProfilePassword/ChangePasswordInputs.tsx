import { useFormContext } from 'react-hook-form';
import './ChangePassword.scss'

const ChangePasswordInputs = () => {
    const forms = [
        { title: 'Старый пароль', field: 'currentPassword', type: 'text' },
        { title: 'Новый пароль', field: 'newPassword', type: 'password' },
        {
            title: 'Подтвердите новый пароль',
            field: 'confirmPassword',
            type: 'password',
        },
    ];

    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const validations = {
        required: 'Заполните это поле',
        minLength: {
            value: 6,
            message: 'Пароль слишком короткий',
        },
    };

    const confirmSchema = {
        required: 'Заполните это поле',
        validate: value =>
            value === watch('newPassword') || 'Пароли не совпадают',
        minLength: {
            value: 6,
            message: 'Пароль слишком короткий',
        },
    };

    return (
        <>
            {forms.map((form, index) => (
                <>
                    {form.field === 'confirmPassword' ? (
                        <>
                            <div className='user-data-edit__field'>
                                <p className='user-data-edit__label'>
                                    {form.title}
                                </p>
                                <input
                                    type={form.type}
                                    className={`user-data-edit__input ${
                                        errors[form.field]
                                            ? 'user-data-edit__input-invalid'
                                            : ''
                                    }`}
                                    {...register(form.field, confirmSchema)}
                                />
                            </div>
                            <span className='user-data-edit__error'>
                                {errors[form.field] &&
                                    errors[form.field].message}
                            </span>
                        </>
                    ) : (
                        <>
                            <div className='user-data-edit__field'>
                                <p className='user-data-edit__label'>
                                    {form.title}
                                </p>
                                <input
                                    type={form.type}
                                    className={`user-data-edit__input ${
                                        errors[form.field]
                                            ? 'user-data-edit__input-invalid'
                                            : ''
                                    }`}
                                    {...register(form.field, validations)}
                                />
                            </div>
                            <span className='user-data-edit__error'>
                                {errors[form.field] &&
                                    errors[form.field].message}
                            </span>
                        </>
                    )}
                </>
            ))}
        </>
    );
};

export default ChangePasswordInputs;
