import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { BsCart3 } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { BiDish } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiDrinks2Fill } from 'react-icons/ri';
import { BiAnalyse } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <Link to="/dashboard">
          <img src="/pngtree-chef-restaurant-logo-png-image_6136204.png" alt="" className='icon_header' />Chef Maki
          </Link>
        </div>
        <span className='icon icon-close' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-items'>
          <Link to="/dashboard" className='sidebar-links'>
          <BsCart3 className='icon' />Dashboard
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/dishes">
          <BiDish className='icon' />Dishes
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/orders"className='sidebar-links'>
          <MdFavoriteBorder className='icon' />Orders
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/drinks"className='sidebar-links'>
          <RiDrinks2Fill className='icon' />Drinks
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/analyses"className='sidebar-links'>
          <BiAnalyse className='icon' />Analyses
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/users"className='sidebar-links'>
          <FaUsers className='icon' />Users
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/reports"className='sidebar-links'>
          <TbReportSearch className='icon' />Reports
          </Link>
        </li>
        <li className='sidebar-items'>
          <Link to="/settings"className='sidebar-links'>
          <IoMdSettings className='icon' />Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
