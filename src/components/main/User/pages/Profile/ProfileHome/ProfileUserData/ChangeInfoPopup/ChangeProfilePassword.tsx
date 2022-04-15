import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { Button } from '../../../../../../../support';
import ChangePasswordInput from './ChangeInputs/ChangePasswordInput';

const ChangeProfilePassword = () => {
    const { changeData } = useTypeSelector(state => state.userProfile);

    const forms = [
        { title: 'Старый пароль', field: 'currentPassword', type: 'text' },
        { title: 'Новый пароль', field: 'newPassword', type: 'password' },
        {
            title: 'Подтвердите новый пароль',
            field: 'confirmPassword',
            type: 'password',
        },
    ];

    const handleButton = (): boolean => {
        if (
            changeData.password.currentPassword === '' ||
            changeData.password.confirmPassword === '' ||
            changeData.password.newPassword === ''
        ) {
            return true;
        }
        if (changeData.password.newPassword !== changeData.password.confirmPassword) {
            return true;
        } else {
            return false;
        }
    };
    const handleSend = () => {
        console.log('sending data');
    };

    return (
        <>
            <p className='user-data-edit__header'>
                Изменение пароля
            </p>
            {forms.map(form => (
                <ChangePasswordInput form={form} key={form.title} />
            ))}
            <Button
                onClick={handleSend}
                isDisabled={handleButton()}
                title={'Сохранить'}
                width={'204px'}
                margin={'25px'}
            />
        </>
    );
};

export default ChangeProfilePassword;
