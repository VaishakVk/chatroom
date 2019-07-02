import React from "react";
import Input from "./input";

const login = props => {
  const loginFields = ["email", "password"];
  return (
    <div>
      <p>Welcome back!</p>
      {loginFields.map(field => (
        <Input
          changed={props.changed}
          key={field}
          inputId={field}
          value={props.value[field]}
          blur={props.blur}
        />
      ))}
      <button type="submit" onClick={props.clicked}>
        LogIn
      </button>
    </div>
  );
};

export default login;
