import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div id="root">
      <h1>Interactive Counter</h1>
      <h2>
        Counter Value: <span>{counter}</span>
      </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={removeValue}></button>
    </div>
  );
}

export default App;
