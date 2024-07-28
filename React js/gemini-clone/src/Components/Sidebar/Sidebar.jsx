import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu"/>
      </div>
      <div className="bottm"></div>
    </div>
  );
};

export default Sidebar;
