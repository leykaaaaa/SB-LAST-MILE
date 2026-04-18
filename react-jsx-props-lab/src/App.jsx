import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      
      {/* Step 3: Render Welcome Component */}
      <Welcome />

      {/* Step 4: Use Props */}
      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />

    </div>
  );
}

export default App;