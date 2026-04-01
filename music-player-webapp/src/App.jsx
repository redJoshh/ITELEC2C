import { use, useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Result from "./components/Result";
import Search from "./components/Search";

import SongList from "./components/SongList";
import Main from "./components/Main";
import Box from "./components/Box";
import BoxHeader from "./components/Boxheader";
import Playlist from "./components/Playlist";

// const tempMusicData = [
//   {
//     track: {
//       id: "1",
//       name: "Blinding Lights",
//       artists: [{ name: "The Weeknd" }],
//       album: {
//         images: [
//           {
//             url: "https://images.genius.com/34c1c35ca27a735e6e5f18611acb1c16.1000x1000x1.png",
//           },
//         ],
//       },
//       playCount: 2345,
//     },
//   },
//   {
//     track: {
//       id: "2",
//       name: "Levitating",
//       artists: [{ name: "Dua Lipa" }],
//       album: {
//         images: [
//           {
//             url: "https://images.genius.com/2cd6ade1ffff7398f5e33a1f4ce3040e.1000x1000x1.png",
//           },
//         ],
//       },
//       playCount: 1789,
//     },
//   },
//   {
//     track: {
//       id: "3",
//       name: "Peaches",
//       artists: [{ name: "Justin Bieber" }],
//       album: {
//         images: [
//           {
//             url: "https://i1.sndcdn.com/artworks-eb0MriwCeIEzf4mo-bUQc2A-t500x500.jpg",
//           },
//         ],
//       },
//       playCount: 2050,
//     },
//   },
// ];

// const tempPlaylistData = [
//   {
//     track: {
//       id: "4",
//       name: "Save Your Tears",
//       artists: [{ name: "The Weeknd" }],
//       album: {
//         images: [
//           {
//             url: "https://i1.sndcdn.com/artworks-OgzMLfEVNXHqSBhf-mhOejQ-t500x500.jpg",
//           },
//         ],
//       },
//       playCount: 1920,
//     },
//   },
// ];

const CLIENT_ID = "9b5b6bc460344e9a927f059d8c08d6e9";
const CLIENT_SECRET = "fbe6db780c43450ab03c0256ee946a9a";

export default function App() {
  // fetch("https://jsonplaceholder.typicode.com/todos/2").then((result) =>
  //   result.json().then((data) => console.log(data)),
  // );

  // const [todos, setTodos] = useState(["hello"]);

  // useEffect(() => {
  //   async function getTodos() {
  //     const result = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/2",
  //     );

  //     const data = await result.json();
  //     setTodos(data);
  //   }
  //   getTodos();
  // }, [todos, setTodos]);

  // console.log(todos);

  const [playlist, setPlaylist] = useState(() => {
    const savedPlaylist = localStorage.getItem("my-playlist");
    return savedPlaylist ? JSON.parse(savedPlaylist) : [];
  });
  const [music, setMusic] = useState([]);

  useEffect(() => {
    localStorage.setItem("my-playlist", JSON.stringify(playlist));
  }, [playlist]);

  return (
    <div>
      <Navbar>
        <Logo />
        <Search
          CLIENT_ID={CLIENT_ID}
          CLIENT_SECRET={CLIENT_SECRET}
          setMusic={setMusic}
        />
        <Result music={music} />
      </Navbar>

      <Main music={music} playlist={playlist}>
        <Box music={music}>
          <BoxHeader>
            <h2>Available Songs ({music.length})</h2>
          </BoxHeader>
          <SongList
            music={music}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        </Box>

        <Box playlist={playlist}>
          <BoxHeader>
            <img
              className="playlist-logo"
              src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
              alt="Playlist"
            />
            <div>
              <h2>My Playlist ({playlist.length})</h2>
              <p>Total songs in playlist</p>
            </div>
          </BoxHeader>

          <Playlist playlist={playlist} />
        </Box>
      </Main>
    </div>
  );
}
