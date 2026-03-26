import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search songs..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
