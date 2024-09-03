import React from "react";
import "./Sidebar.css";
import { BsCart3 } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BiDish } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import { BiAnalyse } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link to="/dashboard">
            <img
              src="/pngtree-chef-restaurant-logo-png-image_6136204.png"
              alt=""
              className="icon_header"
            />
            Chef Makiiiii
          </Link>
        </div>
        <span className="icon icon-close" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-items">
         <Link to="/dashboard" className="sidebar-link">
         <BsCart3 className="icon" />
            Dashboard
         </Link>
         
         
        </li>
        <li className="sidebar-items">
          <Link to="/Dishes" className="sidebar-link">
            <BiDish className="icon" />
            Dishes
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="/Orders" className="sidebar-link">
            <MdFavoriteBorder className="icon" />
            Orders
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="/Drinks" className="sidebar-link">
            <RiDrinks2Fill className="icon" />
            Drinks
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="Analyses" className="sidebar-link">
            <BiAnalyse className="icon" />
            Analyses
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="/Users" className="sidebar-link">
            <FaUsers className="icon" />
            Users
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="/Reports" className="sidebar-link">
            <TbReportSearch className="icon" />
            Reports
          </Link>
        </li>
        <li className="sidebar-items">
          <Link to="/Settings" className="sidebar-link">
            <IoMdSettings className="icon" />
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
