import React, { useContext } from "react";
import { nameContext } from "../App";

export default function UseContextCom2() {
  const message = useContext(nameContext);
  return (
    <div>
      我是context组件二-
      {message}
    </div>
  );
}
