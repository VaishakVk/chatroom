import React from "react";
import "./css/chatapp.css";

const loggedUsers = props => {
  return (
    <div className="loggedUsers">
      <p>Logged In Users</p>
      {props.loggedusers.map(user => (
        <div key={user}>
          <span />
          <p>{user}</p>
        </div>
      ))}
    </div>
  );
};

export default loggedUsers;
