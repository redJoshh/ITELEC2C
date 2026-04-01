function Playlist({ playlist, setPlaylist }) {
  function removeFromPlaylist(id) {
    setPlaylist(playlist.filter((song) => song.id !== id));
  }

  return (
    <div>
      {playlist.map((item) => (
        <div className="song-item" key={item.id}>
          <img src={item.album.images[0].url} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.artists[0].name}</p>
            <button onClick={() => removeFromPlaylist(item.id)}>
              Remove from Playlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
