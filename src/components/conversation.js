import React from "react";
import Message from "./message";
import "./css/chatapp.css";
import Notify from "./notify";

const conversation = props => {
  return (
    <div className="conversation">
      {props.conversationHistory.map(message =>
        message.method === "notify" ? (
          <Notify
            key={message.message + message.username}
            username={message.username}
            message={message.message}
          />
        ) : (
          <Message
            key={message.message + message.username}
            username={message.username}
            message={message.message}
          />
        )
      )}
    </div>
  );
};

export default conversation;
