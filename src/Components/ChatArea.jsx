import React from "react";
import { useState } from "react";

const ChatArea = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{conversations.name}</p>
        <div className="header-text">
          <p className="con-title">{conversations.name}</p>
          <p className="con-timestamp">{conversations.timeStamp}</p>
        </div>
      </div>
      <div className="messages-container">dfd</div>
      <div className="text-input-area">dfdf</div>
    </div>
  );
};

export default ChatArea;
