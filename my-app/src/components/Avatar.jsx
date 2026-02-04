import PFP from "/PFP.jpg";

function Avatar() {
  return (
    <div className="flex flex-row justify-center my-[2rem]">
      <img
        src={PFP}
        className="rounded-[50%] h-[15rem] w-[15rem] group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>
  );
}

export default Avatar;
