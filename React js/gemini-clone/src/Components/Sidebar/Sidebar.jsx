import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" className="new-chat" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">
            
          </p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
