function SongList({ music }) {
  return (
    <div>
      {music.map((item) => (
        <div className="song-item" key={item.id}>
          <img src={item.album.images[0].url} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.artists[0].name}</p>
            <button>Add to Playlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
