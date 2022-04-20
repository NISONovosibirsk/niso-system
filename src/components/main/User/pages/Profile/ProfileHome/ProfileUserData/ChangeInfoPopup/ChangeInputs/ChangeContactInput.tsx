import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../../../../hooks/useTypeSelector';
import { updateChangeData } from '../../../../../../../../../store/actions/userProfileActions';

const ChangeContactInput = ({ form }) => {
    const { profile, changeData } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const handleDefault = () => {
        let value = '';

        profile.userData.find(item => {
            if (item.type === form.field) {
                value = item.value;
            }
        });
        return value;
    };

    const handleInput = e => {
        const newState = { ...changeData };
        const initialValue = e.target.value;

        switch (e.target.name) {
            case 'phone':
                newState.phone = e.target.value;

                break;
            case 'email':
                newState.email = e.target.value;
                break;
            default:
                break;
        }
        dispatch(updateChangeData(newState));
    };

    return (
        <label className='user-data-edit__item'>
            {form.title}
            <input
                name={form.field}
                defaultValue={handleDefault()}
                className='user-data-edit__input'
                onChange={handleInput}
            />
        </label>
    );
};

export default ChangeContactInput;
