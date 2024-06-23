import React from "react";
import "./myStyles.css";
const MessageSelf = () => {
  const props1 = { name: "You", message: "this is easy" };
  return (
    <div>
      <div className="self-message-container">
        <div className="message-box">
          <p>{props1.message}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSelf;
