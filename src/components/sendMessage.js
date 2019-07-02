import React from "react";
import "./css/chatapp.css";

const sendMessage = props => {
  return (
    <form className="sendMessageForm">
      <textarea
        className="sendMessage"
        rows="4"
        cols="50"
        onChange={props.changeEvent}
        value={props.value}
      />
      <button
        className="sendMessageButton"
        type="submit"
        onClick={props.clickEvent}
      >
        Send
      </button>
    </form>
  );
};

export default sendMessage;
