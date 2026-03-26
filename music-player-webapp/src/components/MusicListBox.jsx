import SongList from "./SongList";
import BoxHeader from "./Boxheader";
function MusicListBox({ music }) {
  return (
    <div className="music-list">
      <BoxHeader>
        <h2>Available Songs (x)</h2>
      </BoxHeader>
      <SongList music={music} />
    </div>
  );
}

export default MusicListBox;
