import "../App.css";
function GameSelector({ selectedGame, setSelectedGame }) {
  const currentGames = ["ALL", 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      class="inline-flex rounded-full p-1 shadow-2xs mt-3 gap-1"
      data-aos="fade-right"
      data-aos-delay="400"
    >
      {currentGames.map((game) => (
        <button
          key={game}
          type="button"
          onClick={() => setSelectedGame(game)}
          className={`rounded-full py-1 px-1 text-md transition-all duration-200 ${selectedGame == game ? "bg-red-500 text-white shadow-lg kanit-bold" : "kanit-medium hover:text-white hover:bg-white/5"}`}
        >
          {game === "ALL" ? "ALL" : `TK${game}`}
        </button>
      ))}
    </div>
  );
}

export default GameSelector;
