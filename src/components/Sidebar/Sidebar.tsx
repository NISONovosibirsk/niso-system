import { useDispatch } from 'react-redux';
import { setLoggedInStatus } from '../../store/action-creators/sidebar';
import './Sidebar.scss';

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    const dispatch = useDispatch();

    const handleCloseSidebar = (e: any) =>
        e.target === e.currentTarget && dispatch(setLoggedInStatus(false));

    return (
        <div
            onClick={handleCloseSidebar}
            className={`sidebar ${isOpen && 'sidebar_active'}`}
        >
            <nav className='sidebar__navigation'>
                <ul className='sidebar__list'>
                    <li className='side__item'>1</li>
                    <li className='side__item'>2</li>
                    <li className='side__item'>3</li>
                    <li className='side__item'>4</li>
                    <li className='side__item'>5</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;