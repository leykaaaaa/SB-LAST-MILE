import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Welcome />

      <UserCard 
        name="Angelica" 
        email="angelica@gmail.com" 
      />

      <UserCard 
        name="Steven" 
        email="steven@gmail.com" 
      />
    </div>
  );
}

export default App;