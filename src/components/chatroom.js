import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import LoggedUsers from "./loggedusers";
import Conversation from "./conversation";
import SendMessage from "./sendMessage";
import "./css/chatapp.css";

class ChatRoom extends Component {
  state = {
    loggedUsers: [],
    conversationHistory: []
  };

  componentDidMount() {
    const socket = socketIOClient("http://localhost:5000");
    const name = "VK" + Math.random() * 100;
    socket.emit("addUser", name);

    socket.on("broadcastUser", users => this.setState({ loggedUsers: users }));
  }

  componentWillUnmount() {
    console.log("Inside");
  }

  render() {
    return (
      <div className="chatroom">
        <Conversation conversationHistory={this.state.conversationHistory} />
        <LoggedUsers loggedusers={this.state.loggedUsers} />
        <SendMessage />
      </div>
    );
  }
}

export default ChatRoom;
