const ProfileDocumentsInfo = () => {
    return (
        <>
            <p className='user-info-popup__paragraph'>
                Данный раздел предназначен для хранения личных документов. А
                именно: код образовательного учреждения, название
                образовательного учреждения, ИНН.
            </p>
            <p className='user-info-popup__paragraph'>
                Вы можете внести информацию о документах вручную или прикрепить
                сканы или фотографии документов.
            </p>
            <h4 className='user-info-popup__header'>
                Для того, чтобы прикрепить документы необходимо:
            </h4>
            <ul className='user-info-popup__list'>
                <li>Нажать на кнопку "Прикрепить файл"</li>
                <li>Выбрать необходимые файлы</li>
                <li>После загрузки файлов нажать на кнопку "Сохранить"</li>
            </ul>
        </>
    );
};

export default ProfileDocumentsInfo;
