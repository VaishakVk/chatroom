import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import LoggedUsers from "./loggedusers";
import Conversation from "./conversation";
import SendMessage from "./sendMessage";
import "./css/chatapp.css";

class ChatRoom extends Component {
  state = {
    loggedUsers: [],
    conversationHistory: [],
    currentMessage: "",
    camera: false
  };

  socket = socketIOClient("http://localhost:5000");

  componentDidMount() {
    this.promptCamera();

    const name = "VK" + Math.random() * 100;
    this.socket.username = name;
    this.socket.emit("addUser", name);
    this.socket.emit("sendMessage", {
      username: this.socket.username,
      method: "notify",
      message: "joined"
    });

    this.socket.on("broadcastUser", users =>
      this.setState({ loggedUsers: users })
    );
    this.socket.on("broadcastMessage", conversation =>
      this.setState({ conversationHistory: conversation })
    );
  }

  promptCamera = () => {
    const constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        this.setState({ camera: true });
      })
      .catch(err => {
        this.setState({ camera: false });
      });
  };
  componentWillUnmount() {
    console.log("Inside");
  }

  handleClick = e => {
    e.preventDefault();
    if (this.state.currentMessage === "") return null;
    this.socket.emit("sendMessage", {
      username: this.socket.username,
      method: "message",
      message: this.state.currentMessage
    });

    this.setState({ currentMessage: "" });
  };

  handleChange = e => {
    this.setState({ currentMessage: e.target.value });
  };

  render() {
    return (
      <div className="chatroom">
        <Conversation conversationHistory={this.state.conversationHistory} />
        <LoggedUsers loggedusers={this.state.loggedUsers} />
        <SendMessage
          clickEvent={this.handleClick}
          changeEvent={this.handleChange}
          value={this.state.currentMessage}
        />
      </div>
    );
  }
}

export default ChatRoom;
