import React from 'react';
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
          <a href="">
            <img src="/pngtree-chef-restaurant-logo-png-image_6136204.png" alt="" className='icon_header' />Chef Maki
          </a>
        </div>
        <span className='icon icon-close' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-items'>
          <a href="">
            <BsCart3 className='icon' />Dashboard
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <BiDish className='icon' />Dishes
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <MdFavoriteBorder className='icon' />Orders
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <RiDrinks2Fill className='icon' />Drinks
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <BiAnalyse className='icon' />Analyses
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <FaUsers className='icon' />Users
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <TbReportSearch className='icon' />Reports
          </a>
        </li>
        <li className='sidebar-items'>
          <a href="">
            <IoMdSettings className='icon' />Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
