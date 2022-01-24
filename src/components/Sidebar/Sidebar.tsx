import React from 'react';
import './Sidebar.scss';

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const handleCloseSidebar = (e: any) =>
    e.target === e.currentTarget && setIsOpen(false);

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
