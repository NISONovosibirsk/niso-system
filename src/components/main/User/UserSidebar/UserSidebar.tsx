import { MaisLogo, DoubleArrowIcon } from '../../../../assets';
import { ISidebarListItem } from '../../../../interfaces';
import SidebarItem from './SidebarItem/SidebarItem';
import './UserSidebar.scss';
import './UserSidebarAdaptive.scss';

export interface Props {
    sidebarListData: ISidebarListItem[];
    isOpen: boolean;
    handleCollapse(): void;
}

const UserSidebar: React.FC<Props> = ({
    sidebarListData,
    isOpen,
    handleCollapse,
}) => {
    const techSupport = {
        path: 'support',
        text: 'Техподдержка',
        icon: <></>,
    };

    return (
        <nav
            className={
                isOpen ? 'user-sidebar' : 'user-sidebar user-sidebar_collapsed'
            }
        >
            <div
                className={`user-sidebar__header ${
                    isOpen ? '' : 'user-sidebar__header_collapsed'
                }`}
            >
                <MaisLogo
                    className={`user-sidebar__logo ${
                        isOpen ? '' : 'user-sidebar__logo_collapsed'
                    }`}
                />
                <DoubleArrowIcon
                    className={`user-sidebar__burger ${
                        isOpen ? 'user-sidebar__burger_collapsed' : ''
                    }`}
                    onClick={handleCollapse}
                />
                {isOpen && (
                    <p className='user-sidebar__caption'>
                        Муниципальная система оценки качества образования города
                        Новосибирска
                    </p>
                )}
            </div>
            <ul
                className={`user-sidebar__list ${
                    isOpen ? '' : 'user-sidebar__list_collapsed'
                }`}
            >
                {sidebarListData.map(sidebarItemData => (
                    <SidebarItem
                        isOpen={isOpen}
                        sidebarItemData={sidebarItemData}
                        key={sidebarItemData.path}
                    />
                ))}
            </ul>
            <div
                className={`user-sidebar__footer ${
                    isOpen ? '' : 'user-sidebar__footer_collapsed'
                }`}
            >
                {isOpen && (
                    <>
                        <p className='user-sidebar__politics'>
                            Политика конфиденциальности
                        </p>
                        <p className='user-sidebar__politics'>
                            Все права защищены
                        </p>
                    </>
                )}
                <div className='user-sidebar__support'></div>
                {isOpen && (
                    <SidebarItem
                        isOpen={isOpen}
                        sidebarItemData={techSupport}
                    />
                )}
            </div>
        </nav>
    );
};

export default UserSidebar;
