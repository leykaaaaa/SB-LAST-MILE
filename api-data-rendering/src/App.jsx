import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Conditional Rendering
  if (loading) return <Loader />;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📌 API Data Rendering</h1>
      <DataList data={data} />
    </div>
  );
}

export default App;