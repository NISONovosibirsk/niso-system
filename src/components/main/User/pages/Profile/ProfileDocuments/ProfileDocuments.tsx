import ProfileReference from '../ProfileReference/ProfileReference';
import './ProfileDocuments.scss';
import ProfileDocumentsItem from './ProfileDocumentsItem/ProfileDocumentsItem';

const ProfileDocuments = () => {
    const forms = [
        { title: 'Код образовательного учреждения', type: 'code' },
        { title: 'Название образовательного учреждения', type: 'name' },
        { title: 'ИНН образовательного учреждения', type: 'inn' },
    ];

    return (
        <div className='user-profile-documents'>
            {forms.map((form, index) => (
                <ProfileDocumentsItem form={form} key={index}/>
            ))}
            <ProfileReference />
        </div>
    );
};

export default ProfileDocuments;
