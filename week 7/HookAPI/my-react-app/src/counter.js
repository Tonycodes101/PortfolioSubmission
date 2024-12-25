import React from "react"
import "./App.css"
import { useState } from 'react';

function Hook_ControlledButtonState() {
  // Declare state variable 'count' and the function 'setCount' to update the state
  const [count, setCount] = useState(0);

  // Function to handle button click event
  const ClickHandle = () => {
    // Increment count by 1
    setCount(count + 1);
  };

  return (
    <div className="App-header">
      <form>
        <h1>Click Counts are {count}</h1>
        {/* Button to trigger the click handler */}
        <button type="button" onClick={ClickHandle}>
          Click me {count}
        </button>
      </form>
    </div>
  );
}

export default Hook_ControlledButtonState;

