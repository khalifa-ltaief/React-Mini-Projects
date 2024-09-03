import { useState } from "react"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom"
import Content from "./Components/Content"
import Analyses from "./Components/Sidebar-Components/Analyses"
import Dishes from "./Components/Sidebar-Components/Dishes"
import Drinks from "./Components/Sidebar-Components/Drinks"
import Orders from "./Components/Sidebar-Components/Orders"
import Reports from "./Components/Sidebar-Components/Reports"
import Settings from "./Components/Sidebar-Components/Settings"
import Users from "./Components/Sidebar-Components/Users"
function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)}
    return(
<div className='container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Content/>}/>
        <Route path="/analyses" element={<Analyses/>}/>
        <Route path="/dishes" element={<Dishes/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
    )
}
export default Dashboard;