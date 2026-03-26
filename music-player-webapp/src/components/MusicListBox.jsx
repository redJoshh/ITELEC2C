import BoxHeader from "./Boxheader";
import SongList from "./SongList";
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
