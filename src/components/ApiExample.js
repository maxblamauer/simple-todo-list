import "../styles/styles.css";
import { useState } from "react";

const ApiExample = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(false); // Loading indicator
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Data:</h3>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data yet</p>
      )}
      <button className="apiButton" onClick={getData} disabled={loading}>
        {loading ? "Loading..." : "Press button for data!"}
      </button>
    </div>
  );
};

export default ApiExample;
