import React, { useState } from 'react';

function Counter({ label, onCountChange }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);

    // send value to parent
    if (onCountChange) {
      onCountChange(newCount);
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);

    if (onCountChange) {
      onCountChange(newCount);
    }
  };

  return (
    <div>
      <h2>{label}</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;