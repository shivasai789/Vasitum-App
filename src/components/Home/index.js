import { useState,useEffect } from "react";
import { menuItems, otherItems } from "../MenuItem";
import { Routes, Route,useLocation,Navigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import SideBar from "../SideBar";
import Header from "../Header";
import Recruitment from "../Recruitment";
import Schedule from "../Schedule";
import Employee from "../Employee";
import Department from "../Department";
import Support from "../Support";
import Setting from "../Setting";
import NotFound from "../NotFound";

import "./index.css";

const Home = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(menuItems[0].id);

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case "/recruitment":
        setActiveTab("recruitment");
        break;
      case "/schedule":
        setActiveTab("schedule");
        break;
      case "/employee":
        setActiveTab("employee");
        break;
      case "/department":
        setActiveTab("department");
        break;
      case "/support":
        setActiveTab("support");
        break;
      case "/settings":
        setActiveTab("settings");
        break;
      case "/not-found":
        setActiveTab("not-found");
        break;
      default:
        setActiveTab("dashboard"); 
    }
  }, [location.pathname]);

  const onChangeTabItem = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="Home-page-bg-container">
      <div className="side-bar-container">
        <SideBar
          menuDetails={menuItems}
          activeTab={activeTab}
          otherMenuDetails={otherItems}
          onChangeTabItem={onChangeTabItem}
        />
      </div>
      <div className="header-dashboard-container">
        <Header />
        <Routes>
          <Route exact path="/" Component={Dashboard} />
          <Route exact path="/recruitment" Component={Recruitment} />
          <Route exact path="/schedule" Component={Schedule} />
          <Route exact path="/employee" Component={Employee} />
          <Route exact path="/department" Component={Department} />
          <Route exact path="/support" Component={Support} />
          <Route exact path="/settings" Component={Setting} />
          <Route exact path="/not-found" Component={NotFound} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
