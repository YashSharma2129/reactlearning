import { useState } from "react"; // use hooks
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    // counter = counter - 1;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>clicked And Count </h1>
      <h2>counter Value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
