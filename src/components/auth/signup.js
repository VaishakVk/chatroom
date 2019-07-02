import React from "react";
import Input from "./input";

const signup = props => {
  const signupFields = ["username", "email", "password", "confirmPassword"];
  return (
    <div>
      <p>Sign Up!!</p>
      {signupFields.map(field => (
        <Input
          changed={props.changed}
          key={field}
          inputId={field}
          value={props.value[field]}
        />
      ))}
      <button type="submit" onClick={props.clicked}>
        LogIn
      </button>
    </div>
  );
};

export default signup;
