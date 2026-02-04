import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center align-center">
        <div className="flex flex-col group bg-[#8E1616] border border-gray-300 shadow-2xs rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition  mt-5">
          <Avatar />
          <div className="p-4 md:p-5">
            <Intro />
            <h3 className="text-md text-[#E8C999] mt-[1rem]">Skills:</h3>
            <SkillList />
          </div>
        </div>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <Skills name="HTML" color="green" />
  //     <Skills name="CSS" color="yellow" />
  //     <Skills name="JS" color="pink" />
  //     <Skills name="ASP.NET" color="cyan" />
  //     <Skills name="Python" color="" />
  //   </div>
  // );
}

// function Skills(props) {
//   const SkillDesign = {
//     margin: "50px",
//     color: "red",
//     backgroundColor: props.color,
//   };
//   return <span style={SkillDesign}>{props.name}</span>;
// }

export default App;
