import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "./DashboardComponents/Header";
import Sidebar from "./DashboardComponents/Sidebar";
import Content from "./DashboardComponents/Content";
import Analyses from "./DashboardComponents/SidebarComponents/Analyses";
import Dishes from "./DashboardComponents/SidebarComponents/Dishes";
import Drinks from "./DashboardComponents/SidebarComponents/Drinks";
import Orders from "./DashboardComponents/SidebarComponents/Orders";
import Reports from "./DashboardComponents/SidebarComponents/Reports";
import Settings from "./DashboardComponents/SidebarComponents/Settings";
import Users from "./DashboardComponents/SidebarComponents/Users";
function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />}/>
        <Route path="/dashboard" element={<Content />} />
        <Route path="/analyses" element={<Analyses />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default Dashboard;
