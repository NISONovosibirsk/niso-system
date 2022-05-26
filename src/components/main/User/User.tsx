import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import UserHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    DiagnosticIcon,
    DiagnosticResultsIcon,
    FileShareIcon,
    HomeIcon,
    InstitutionListIcon,
    MaterialsIcon,
    OrganizerIcon,
    ProceduresIcon,
    ProceduresResultsIcon,
    QAIcon,
} from '../../../assets';
import { useTypeSelector } from '../../../hooks/useTypeSelector';

const User = () => {
    const loggedSidebarListData = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <OrganizerIcon />,
        },
        {
            path: 'constructor',
            text: 'Оценочные процедуры (мониторинги)',
            icon: <ProceduresIcon />,
        },
        {
            path: 'reports',
            text: 'Результаты оценочных процедур (мониторингов)',
            icon: <ProceduresResultsIcon />,
        },
        {
            path: 'diagnostic',
            text: 'Профессиональная диагностика',
            icon: <DiagnosticIcon />,
        },
        {
            path: 'diagnostic-results',
            text: 'Результаты профессиональной диагностики',
            icon: <DiagnosticResultsIcon />,
        },
        {
            path: 'handbook',
            text: 'Методические материалы (рекомендации, сборники, памятки)',
            icon: <MaterialsIcon />,
        },
        {
            path: 'files',
            text: 'Файлообменник',
            icon: <FileShareIcon />,
        },
        {
            path: 'communications',
            text: 'Вопрос/Ответ',
            icon: <QAIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <InstitutionListIcon />,
        },
    ];

    const notLoggedSidebarListData = [
        {
            path: 'home',
            text: 'Главная',
            icon: <HomeIcon />,
        },
        {
            path: 'organizer',
            text: 'Органайзер руководителя',
            icon: <OrganizerIcon />,
        },
        {
            path: 'listEI',
            text: 'Список образовательных учреждений',
            icon: <InstitutionListIcon />,
        },
    ];

    const { isLogged } = useTypeSelector(state => state.userStatus);

    return (
        <div className='user'>
            <UserSidebar
                sidebarListData={
                    isLogged ? loggedSidebarListData : notLoggedSidebarListData
                }
            />
            <UserHeader />
            <Outlet />
        </div>
    );
};

export default User;
