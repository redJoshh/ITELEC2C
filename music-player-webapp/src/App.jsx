import { useState } from "react";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Result from "./components/Result";
import Search from "./components/Search";

import SongList from "./components/SongList";
import MusicListBox from "./components/MusicListBox";
import PlaylistBox from "./components/PlaylistBox";

const tempMusicData = [
  {
    track: {
      id: "1",
      name: "Blinding Lights",
      artists: [{ name: "The Weeknd" }],
      album: {
        images: [
          {
            url: "https://images.genius.com/34c1c35ca27a735e6e5f18611acb1c16.1000x1000x1.png",
          },
        ],
      },
      playCount: 2345,
    },
  },
  {
    track: {
      id: "2",
      name: "Levitating",
      artists: [{ name: "Dua Lipa" }],
      album: {
        images: [
          {
            url: "https://images.genius.com/2cd6ade1ffff7398f5e33a1f4ce3040e.1000x1000x1.png",
          },
        ],
      },
      playCount: 1789,
    },
  },
  {
    track: {
      id: "3",
      name: "Peaches",
      artists: [{ name: "Justin Bieber" }],
      album: {
        images: [
          {
            url: "https://i1.sndcdn.com/artworks-eb0MriwCeIEzf4mo-bUQc2A-t500x500.jpg",
          },
        ],
      },
      playCount: 2050,
    },
  },
];

const tempPlaylistData = [
  {
    track: {
      id: "4",
      name: "Save Your Tears",
      artists: [{ name: "The Weeknd" }],
      album: {
        images: [
          {
            url: "https://i1.sndcdn.com/artworks-OgzMLfEVNXHqSBhf-mhOejQ-t500x500.jpg",
          },
        ],
      },
      playCount: 1920,
    },
  },
];

export default function App() {
  const [playlist, setPlaylist] = useState(tempPlaylistData);
  const [music, setMusic] = useState(tempMusicData);

  return (
    <div>
      <Navbar>
        <Logo />
        <Search />
        <Result music={music} />
      </Navbar>

      <main className="main">
        <MusicListBox music={music} />

        <PlaylistBox playlist={playlist} />
      </main>
    </div>
  );
}
