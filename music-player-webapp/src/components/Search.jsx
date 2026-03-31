import { useEffect, useState } from "react";

export default function Search({ CLIENT_ID, CLIENT_SECRET, setMusic }) {
  const [query, setQuery] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  async function search() {
    const trackParameter = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const tracks = await fetch(
      "https://api.spotify.com/v1/search?q=" + query + "&type=track&limit=5",
      trackParameter,
    )
      .then((result) => result.json())
      .then((data) => setMusic(data.tracks.items));
  }
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search songs..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          search();
        }
      }}
    />
  );
}
