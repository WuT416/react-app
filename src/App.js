import "./App.css";
import React from "react";
import UseStateCom from "./components/useStateCom";
import UseContextCom1 from "./components/useContextCom1";
import UseReducerCom from "./components/useReducerCom";
import UseEffectCom from "./components/useEffectCom";

//2.useContext
export const nameContext = React.createContext("");

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>react hooks</h1>
      </header>
      <div>
        <p>1.useState</p>
        <UseStateCom />
        <p>2.useContext</p>
        <nameContext.Provider value="最外面的数据">
          <UseContextCom1 />
        </nameContext.Provider>
        <p>3.UseReducer</p>
        <UseReducerCom />
        <p>4.UseEffect</p>
        <UseEffectCom />
      </div>
    </div>
  );
}
