
import { useTypeSelector } from '../../../../../../../../hooks/useTypeSelector';
import { Button } from '../../../../../../../support';
import ChangeContactInput from './ChangeInputs/ChangeContactInput';

const ChangeProfileContact = () => {
    const { popup } = useTypeSelector(state => state.userProfile);

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
            <Button title={'Изменить'} width={'204px'} margin={'25px'} />
        </form>
    );
};

export default ChangeProfileContact;