import React from "react";
import "./myStyles.css";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import ConversationItem from "./ConversationItem";

const Sidebar = ({ conversations }) => {
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>{<CiUser />}</div>
        <div>
          {" "}
          {<CiUser />}
          {<CiUser />}
          {<CiUser />}
          {<CiUser />}
        </div>
      </div>
      <div className="sb-search">
        {<CiSearch />}
        <input type="text" placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversation">
        {conversations.map((conversation) => {
          return (
            <ConversationItem
              key={conversation.name}
              conversation={conversation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
