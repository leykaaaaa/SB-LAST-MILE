import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent!");

  const updateMessage = (newMessage) => {
    console.log("Updating message:", newMessage);
    setMessage(newMessage);
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      <h2>Parent Component</h2>

      <Child message={message} updateMessage={updateMessage} />
      <Child message={message} updateMessage={updateMessage} />

      <Display message={message} />
    </div>
  );
}

export default Parent;