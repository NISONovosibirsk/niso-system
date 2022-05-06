import { FormProvider, useForm } from 'react-hook-form';
import ChangePasswordInputs from './ChangePasswordInputs';

const ChangeProfilePassword = () => {
    const methods = useForm({ mode: 'onChange' });

    const onSubmit = data => {
        console.log(methods.formState.errors);
        console.log(JSON.stringify(data));
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
