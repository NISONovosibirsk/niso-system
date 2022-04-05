import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { updatePopup } from '../../../../../../../../store/actions/userProfileActions';
import { Button, Popup } from '../../../../../../../support';
import ChangePasswordInput from '../ChangePasswordInput/ChangePasswordInput';
import './ChangePasswordPopup.scss';

const ChangePasswordPopup = () => {
    const { popup } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const forms = [
        { title: 'Старый пароль', field: 'currentPassword', type: 'text' },
        { title: 'Новый пароль', field: 'newPassword', type: 'password' },
        {
            title: 'Подтвердите новый пароль',
            field: 'confirmPassword',
            type: 'password',
        },
    ];

    const handleClose = () => {
        const newState = { ...popup };
        newState.isOpen = false;
        newState.currentPassword = '';
        newState.newPassword = '';
        newState.confirmPassword = '';
        dispatch(updatePopup(newState));
    };

    const handleButton = (): boolean => {
        if (
            popup.currentPassword === '' ||
            popup.confirmPassword === '' ||
            popup.newPassword === ''
        ) {
            return true;
        }
        if (popup.newPassword !== popup.confirmPassword) {
            return true;
        } else {
            return false;
        }
    };

    

    const handleSend = () => {
        console.log('sending data');
    };

    return (
        <Popup isOpen={popup.isOpen} onClose={handleClose}>
            <form className='user-profile-change-password'>
                <p className='user-profile-change-password__header'>
                    Изменение пароля
                </p>
                {forms.map(form => (
                    <ChangePasswordInput form={form} key={form.title} />
                ))}
                {/* <p>АЛЯРМА!</p> */}
                <Button
                    onClick={handleSend}
                    isDisabled={handleButton()}
                    title={'Сохранить'}
                    width={'204px'}
                    margin={'25px'}
                />
            </form>
        </Popup>
    );
};

export default ChangePasswordPopup;
