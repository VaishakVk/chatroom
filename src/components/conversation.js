import React from "react";
import Message from "./message";
import "./css/chatapp.css";

const conversation = props => {
  return (
    <div className="conversation">
      {props.conversationHistory.map(message => (
        <Message />
      ))}
    </div>
  );
};

export default conversation;
