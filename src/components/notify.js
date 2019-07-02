import React from "react";

const notify = props => {
  return (
    <div>
      {props.username} has {props.message}
    </div>
  );
};

export default notify;
