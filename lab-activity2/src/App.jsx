import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CharacterPreview from "./components/CharacterPreview";
import MainMenu from "./components/MainMenu";
import { tekkenCharacters } from "./data/TekkenCharacters";

function App() {
  const [activeChar, setActiveChar] = useState(tekkenCharacters[-1]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div className="relative flex h-screen w-full justify-center p-12 z-10">
      <MainMenu activeChar={activeChar} setActiveChar={setActiveChar} />
      <CharacterPreview activeChar={activeChar} />
    </div>
  );
}

export default App;
