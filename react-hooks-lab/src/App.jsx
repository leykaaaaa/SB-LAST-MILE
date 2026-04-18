import { useState, useEffect } from "react";

function App() {
  // State
  const [count, setCount] = useState(0);

  // Functions
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Side Effect
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={increase} style={{ margin: "5px" }}>
        Increase
      </button>

      <button onClick={decrease} style={{ margin: "5px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;