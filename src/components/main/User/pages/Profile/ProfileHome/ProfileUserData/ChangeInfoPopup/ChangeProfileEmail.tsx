import { useForm } from 'react-hook-form';

const ChangeProfileEmail = () => {
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
        required: true,
        pattern: regEx,
        minLength: 10,
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className='user-data-edit__header'>
                Изменение адреса электронной почты
            </p>
            <label className='user-data-edit__item'>
                <input
                    className='user-data-edit__input'
                    {...register('email', validations)}
                />
            </label>
            {errors.email && errors.email.type === 'required' && (
                <p className='user-data-edit__error'>Заполните это поле</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
                <p className='user-data-edit__error'>Некорректный формат электронной почты</p>
            )}
            {errors.email && errors.email.type === 'minLength' && (
                <p className='user-data-edit__error'>Адрес слишком короткий</p>
            )}
            <input type='submit' disabled={!isValid} />
        </form>
    );
};

export default ChangeProfileEmail;
