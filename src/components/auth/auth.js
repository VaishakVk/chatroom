import React, { Component } from "react";
import Login from "./login";
import Signup from "./signup";

class Auth extends Component {
  state = {
    tab: "login",
    inputId: { email: "", password: "", username: "", confirmPassword: "" }
  };

  loginFields = ["username", "password"];

  updateState = () => {
    const originalInputState = { ...this.state.inputId };
    for (let key in originalInputState) {
      originalInputState[key] = "";
    }
    this.setState({ inputId: originalInputState }, () =>
      console.log(this.state.inputId)
    );
  };

  handleChange = (e, input) => {
    const originalInputState = { ...this.state.inputId };
    originalInputState[input] = e.target.value;
    this.setState({ inputId: originalInputState }, () =>
      console.log(this.state.inputId)
    );
  };

  handleLoginClick = e => {
    e.preventDefault();

    this.updateState();
  };

  validateField = (e, inputId) => {
    console.log(e);
  };

  handleSwitch = entity => {
    this.updateState();
    this.setState({ tab: entity });
  };
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.handleSwitch("signup")}>Signup</li>
          <li onClick={() => this.handleSwitch("login")}>Login</li>
          {this.state.tab === "login" ? (
            <Login
              value={this.state.inputId}
              changed={this.handleChange}
              clicked={this.handleLoginClick}
              blur={this.validateField}
            />
          ) : (
            <Signup
              value={this.state.inputId}
              changed={this.handleChange}
              clicked={this.handleLoginClick}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Auth;
