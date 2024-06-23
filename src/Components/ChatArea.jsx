import React from "react";
import { useState } from "react";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatArea = ({ conversations }) => {
  console.log(conversations);
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{conversations.name}xcx</p>
        <div className="header-text">
          <p className="con-title">{conversations.lastMessage}</p>
          <p className="con-timestamp">{conversations.timeStamp}</p>
        </div>
      </div>
      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Message " className="search-box"></input>
      </div>
    </div>
  );
};

export default ChatArea;
