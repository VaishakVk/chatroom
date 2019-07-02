import React from "react";

const input = props => {
  const mapping = {
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    username: "User Name"
  };
  return (
    <div>
      <label>
        {mapping[props.inputId]}
        <span>*</span>
      </label>
      <input
        type="text"
        required
        autoComplete="off"
        value={props.value}
        onChange={e => props.changed(e, props.inputId)}
        onBlur={e => props.blur(e, props.inputId)}
      />
    </div>
  );
};

export default input;
