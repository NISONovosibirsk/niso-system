import UserSidebar from './UserSidebar/UserSidebar';
import './User.scss';
import ProfileHeader from './UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';
import {
    DiagnosticIcon,
    DiagnosticResultsIcon,
    FileShareIcon,
    HomeIcon, InstitutionListIcon, MaterialsIcon, OrganizerIcon, ProceduresIcon, ProceduresResultsIcon, QAIcon,
} from '../../../assets';

const User = () => {
    const isAdmin = true;

    const memberSidebarListData = [
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
            path: 'ofs',
            text: 'Профессиональная диагностика',
            icon: <DiagnosticIcon />,
        },
        {
            path: 'ofs',
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


    const adminSidebarListData = [
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

    return (
        <div className='user'>
            <UserSidebar
                sidebarListData={
                    isAdmin ? adminSidebarListData : memberSidebarListData
                }
            />
            <ProfileHeader />
            <Outlet />
        </div>
    );
};

export default User;
