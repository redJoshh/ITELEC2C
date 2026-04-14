import { useEffect, useState } from "react";

function App() {
  // const [time, setTime] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //     console.log("Clean up!");
  //   };
  // }, []);
  // const [count, setCount] = useState(0);
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   console.log("Component mounted");
  // }, []);

  // useEffect(() => {
  //   console.log("Count Changed", count);
  // }, [count]);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 3) return;
    async function fetchMovies() {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=48475bd5`,
      );
      const data = await response.json();

      setResults(Array.isArray(data.Search) ? data.Search : []);
    }
    fetchMovies();
  }, [query]);

  console.log(results);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //     );
  //     const data = await response.json();
  //     setPost(data);
  //     console.log(post);
  //   }
  //   fetchUsers();
  // }, [count]);

  return (
    <div>
      <h1>Search:</h1>
      <input
        type="query"
        name="query"
        id="query"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length === 0 ? (
        <p>No Movie found</p>
      ) : (
        results.map((item) => <p key={item.imdbID}>{item.Title}</p>)
      )}
    </div>
  );
}

export default App;
