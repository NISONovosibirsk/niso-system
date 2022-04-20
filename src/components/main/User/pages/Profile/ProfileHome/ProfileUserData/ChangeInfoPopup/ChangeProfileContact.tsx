import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { setPopupTitle } from '../../../../../../../../store/actions/userProfileActions';
import { Button } from '../../../../../../../support';
import ChangeContactInput from './ChangeInputs/ChangeContactInput';

const ChangeProfileContact = () => {
    const { popup, changeData } = useTypeSelector(
        state => state.userProfile
    );
    const dispatch = useDispatch();

    useEffect(() => {
        switch (popup.type) {
            case 'phone':
                dispatch(setPopupTitle('Изменение номера телефона'));
                break;
            case 'email':
                dispatch(setPopupTitle('Изменение адреса электронной почты'));
                break;
            default:
                break;
        }
    }, []);

    const form = {
        phone: { title: 'Номер телефона', field: 'phone', type: 'text' },
        email: {
            title: 'Адрес электронной почты',
            field: 'email',
            type: 'text',
        },
    };

    const handleType = () => {
        switch (popup.type) {
            case 'phone':
                return form.phone;
            case 'email':
                return form.email;
            default:
                break;
        }
    };

    return (
        <form>
            <p className='user-data-edit__header'>{popup.title}</p>
            <ChangeContactInput form={handleType()} />
            <Button
                title={'Изменить'}
                width={'204px'}
                margin={'25px'}
                isDisabled={!changeData.isValid}
            />
        </form>
    );
};

export default ChangeProfileContact;
