import React from "react";
import "./css/chatapp.css";

const sendMessage = props => {
  return (
    <form className="sendMessageForm">
      <textarea className="sendMessage" rows="4" cols="50" />
      <button className="sendMessageButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default sendMessage;
