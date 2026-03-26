import Playlist from "./Playlist";
import BoxHeader from "./Boxheader";

function PlaylistBox({ playlist }) {
  return (
    <div className="playlist-container">
      <BoxHeader>
        <img
          className="playlist-logo"
          src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
          alt="Playlist"
        />
        <div>
          <h2>My Playlist (X)</h2>
          <p>Total songs in playlist</p>
        </div>
      </BoxHeader>

      <Playlist playlist={playlist} />
    </div>
  );
}

export default PlaylistBox;
