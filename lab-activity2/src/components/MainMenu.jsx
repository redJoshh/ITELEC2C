import { useState } from "react";
import "../App.css";
import GameSelector from "./GameSelector";
import CharacterIcons from "./CharacterIcons";

function MainMenu({ activeChar, setActiveChar }) {
  const [selectedGame, setSelectedGame] = useState("ALL");

  return (
    <div data-aos="fade-right" data-aos-delay="200">
      <div className="bg-black/40 w-[45em] backdrop-blur-md border border-white/15 rounded-lg shadow-2xl mx-8  p-6 -skew-x-12 flex justify-center">
        <div className="flex flex-col items-center content-center">
          <h1 className=" text-3xl title italic tracking-tighter -skew-x-12">
            TEKKEN
          </h1>
          <h2 className="teko text-lg -skew-x-12">CHOOSE YOUR FIGHTER</h2>
          <GameSelector
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />
          <CharacterIcons
            selectedGame={selectedGame}
            activeChar={activeChar}
            setActiveChar={setActiveChar}
          />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
