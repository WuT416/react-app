import React, { useState } from "react";

export default function UseStateComponent() {
  const [buttonText, setButtonText] = useState("Click me,   please");

  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }
  return <button onClick={handleClick}>{buttonText}</button>;
}
