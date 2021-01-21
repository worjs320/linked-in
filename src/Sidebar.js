import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://placeimg.com/1000/480/any" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>jgkim</h2>
        <h4>worjs320@naver.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">3200</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2530</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("design")}
        {recentItem("barak")}
        {recentItem("barak.gg")}
      </div>
    </div>
  );
}

export default Sidebar;
