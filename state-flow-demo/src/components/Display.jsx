function Display({ message }) {
  return (
    <div style={{ border: "2px dashed blue", margin: "20px", padding: "10px" }}>
      <h2>Display Component</h2>
      <p>Current Message: {message}</p>
    </div>
  );
}

export default Display;