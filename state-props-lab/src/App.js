import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import Display from './Display';

function App() {
  // shared state (for Step 4 - lifting state up)
  const [sharedCount, setSharedCount] = useState(0);

  // function to update shared state
  const handleCountChange = (newCount) => {
    setSharedCount(newCount);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>State and Props Lab</h1>

      {/* STEP 2: Greeting using props */}
      <Greeting name="Alice" />
      <Greeting name="Bob" />

      <hr />

      {/* STEP 3: Counter with props */}
      <Counter label="My Counter" onCountChange={handleCountChange} />

      {/* STEP 4: Display shared state */}
      <Display value={sharedCount} />
    </div>
  );
}

export default App;