import { useState, useEffect } from "react";
import { randomizeNum } from "../utility/utility.js";

export default function CatFacts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://catfact.ninja/facts?page=${randomizeNum(30)}&limit=5`
        );
        if (!response.ok) {
          throw new Error(`Can't get data from the API. ${response.status}`);
        }
        const data = await response.json();
        const results = data.data;
        console.log(results);
        setData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFacts();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Facts about cats!</h2>
          <ul>
            {data.map((facts, index) => (
              <li key={index}>
                {index + 1}. {facts.fact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
