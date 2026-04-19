import { useState } from "react";

function Child({ message, updateMessage }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    updateMessage(input);
    setInput("");
  };

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>Child Component</h3>

      <p>Message from Parent: {message}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new message"
      />

      <button onClick={handleClick}>Update Parent</button>
    </div>
  );
}

export default Child;