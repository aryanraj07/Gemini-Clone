import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useGemini } from "../../context";

const Sidebar = () => {
  const { setAnswer, recentChats } = useGemini();
  const [extended, setExtended] = useState(false);

  const handleNewChat = () => {
    setAnswer(null);
  };

  const renderRecentChats = () => (
    <div className="recent">
      <p className="recent-title">Recent</p>
      {recentChats.map((chat, index) => (
        <div className="recent-entry" key={index}>
          <img src={assets.message_icon} alt="message icon" />
          <p>{chat.question}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div className="new-chat" onClick={handleNewChat}>
          <img src={assets.plus_icon} alt="plus icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && renderRecentChats()}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
