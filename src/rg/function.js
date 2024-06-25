import React from "react";

const FunctionComponent = ({ number = 10 }) => {
  return (
    <div>
      <p>Function Component</p>
      <p>State is {number}</p>
    </div>
  );
};

export default FunctionComponent;
