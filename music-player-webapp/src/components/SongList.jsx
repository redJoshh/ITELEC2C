function SongList({ music }) {
  return (
    <div>
      {music.map((item) => (
        <div className="song-item" key={item.track.id}>
          <img src={item.track.album.images[0].url} alt={item.track.name} />
          <div>
            <h3>{item.track.name}</h3>
            <p>{item.track.artists[0].name}</p>
            <button>Add to Playlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
