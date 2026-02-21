import "../App.css";
function CharacterPreview({ activeChar }) {
  if (!activeChar) return null;

  const { Name, Preview, ...otherData } = activeChar;

  return (
    <div
      key={Name}
      className="flex-1 h-full flex flex-col items-center p-10 z-10 animate-in fade-in  duration-700 mt-0"
    >
      <div className="h-full w-full  flex items-center justify-end pr-20 ">
        <img
          src={Preview}
          alt={Name}
          className="h-full w-auto object-contain drop-shadow-2xl duration-500"
          data-aos="fade-left"
          data-aos-delay="200"
        />
      </div>
      <div
        className="absolute bottom-20 right-10 flex flex-col items-end z-20"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <div className="relative bg-white/10 backdrop-blur-md px-6 py-2 border-l-4 border-red-600 -skew-x-12">
          <h1 className="text-5xl text-white teko italic uppercase tracking-tighter drop-shadow-2xl z-10 relative">
            {Name}
          </h1>
        </div>
        <div className="flex gap-6 mt-2 font-body">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 border-l-4 border-red-600 -skew-x-12">
            <p className="text-white text-sm kanit-medium uppercase italic tracking-widest skew-x-12">
              {otherData.FightingStyle}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 border-l-4 border-red-600 -skew-x-12">
            <p className="text-white text-sm kanit-medium uppercase italic tracking-widest skew-x-12">
              {otherData.Origin}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPreview;
