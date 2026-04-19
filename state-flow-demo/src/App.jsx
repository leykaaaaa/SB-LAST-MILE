import Parent from "./components/Parent";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>React State Flow Demo</h1>
      <Parent />
    </div>
  );
}

export default App;