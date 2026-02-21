import { tekkenCharacters } from "../data/TekkenCharacters";

function CharacterIcons({ selectedGame, activeChar, setActiveChar }) {
  return (
    <div
      className="grid grid-cols-5 gap-y-7 gap-x-5 mt-5 "
      data-aos="fade-right"
      data-aos-delay="600"
    >
      {tekkenCharacters.map((char) => {
        const { id, Icon, Name, GridName, Appearances } = char;

        const isExisting =
          selectedGame === "ALL" || Appearances.includes(selectedGame);
        const isActive = activeChar?.id === id;

        return (
          <div
            className="flex flex-col items-center group cursor-pointer "
            key={id}
            onClick={() => isExisting && setActiveChar(char)}
          >
            <div
              className={`relative w-24 h-24 overflow-hidden border-2 transition-all duration-300 ${
                isExisting
                  ? "border-red-600/50 group-hover:border-red-500 group-hover:scale-110 group-hover:shadow-xl"
                  : "border-black opacity-20 grayscale"
              }
            
            ${isActive ? "border-white bg-red-600/20 scale-110 shadow-lg" : ""}`}
            >
              <img
                src={Icon}
                alt={Name}
                className="w-full h-full object-cover skew-x-12 scale-125"
              />
            </div>
            <span
              className={`mt-2 teko text-lg italic tracking-tighter skew-x-12 transition-colors ${isActive ? "text-red-500" : "text-gray-500 group-hover: text-white"}
            ${isActive ? "text-red-500" : "text-gray-400 group-hover:text-white"}
            ${!isExisting && "hidden"}
            `}
            >
              {GridName}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterIcons;
