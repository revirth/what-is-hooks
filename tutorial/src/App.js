import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import CounterReducer from "./Counter.Reducer";
import InfoReducer from "./Info.Reducer";
import Average from "./Average";
import AverageCallback from "./Average.Callback";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>React Hooks</h1>

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Components" : "Show Components"}
      </button>
      <hr />
      {visible && (
        <div>
          <Counter />
          <Info />
          <CounterReducer />
          <InfoReducer />
          <Average />
          <AverageCallback />
        </div>
      )}
    </div>
  );
}

export default App;
