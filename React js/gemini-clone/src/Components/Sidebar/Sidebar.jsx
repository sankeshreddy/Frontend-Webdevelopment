import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>what is react...</p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
