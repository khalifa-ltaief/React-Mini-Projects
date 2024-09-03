import React from "react";
import "./Header.css";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsSearch,
  BsPersonCircle,
  BsJustify,
} from "react-icons/bs";
function Header({OpenSidebar}) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
      <div div className="header-icon">
        <BsSearch className="icon" />
      </div>
      <div className="header-center">
      <input type="text" />
      </div>
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
