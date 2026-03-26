function Playlist({ playlist }) {
  return (
    <div>
      {playlist.map((item) => (
        <div className="song-item" key={item.track.id}>
          <img src={item.track.album.images[0].url} alt={item.track.name} />
          <div>
            <h3>{item.track.name}</h3>
            <p>{item.track.artists[0].name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
