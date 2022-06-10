import { useFormContext } from 'react-hook-form';
import './ChangeProfileName.scss';

const ChangeNameInputs = () => {
    const forms = [
        { title: 'Имя', field: 'name', type: 'text' },
        { title: 'Фамилия', field: 'lastName', type: 'text' },
        {
            title: 'Отчество',
            field: 'patronymic',
            type: 'text',
        },
    ];

    const {
        register,
        formState: { errors },
    } = useFormContext();

    const validations = {
        required: 'Заполните это поле',
        minLength: {
            value: 2,
            message: 'Запись слишком короткая',
        },
        maxLength: {
            value: 20,
            message: 'Запись слишком длинная',
        },
    };

    return (
        <>
            {forms.map((form, index) => (
                <>
                    <div className='user-data-edit__field'>
                        <p className='user-data-edit__label'>{form.title}</p>
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
                        {errors[form.field] && errors[form.field].message}
                    </span>
                </>
            ))}
        </>
    );
};

export default ChangeNameInputs;
