import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../../../../../hooks/useTypeSelector';
import { updateReference } from '../../../../../../store/actions/userProfileActions';
import { Button } from '../../../../../support';

const DocumentsReference = () => {
    const { reference } = useTypeSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const handleClose = () => {
        const newState = { ...reference };
        newState.isOpen = false;
        dispatch(updateReference(newState));
    };

    return (
        <div className='user-profile-reference'>
            <p className='user-profile-reference__title'>Документы</p>
            <p className='user-profile-reference__text'>
                Данный раздел предназначен для хранения личных документов. А
                именно: код образовательного учреждения, название
                образовательного учреждения, ИНН. Вы можете внести информацию о
                документах вручную или прикрепить сканы или фотографии
                документов. Для того, чтобы прикрепить документы необходимо:
                Нажать на кнопку "Прикрепить файл" Выбрать необходимые файлы
                После загрузки файлов нажать на кнопку "Сохранить"
            </p>
            <Button onClick={handleClose} title={'Изучил👍'} width={'205px'} />
        </div>
    );
};

export default DocumentsReference;
