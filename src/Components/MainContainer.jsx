import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";

import ChatArea from "./ChatArea";
const MainContainer = () => {
  const conversations = [
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
      name: "Test#7",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ];
  return (
    <div className="main-container">
      <Sidebar conversations={conversations} />

      <ChatArea conversations={conversations} />
    </div>
  );
};

export default MainContainer;
