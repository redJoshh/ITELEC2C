function Skill({ skillName, textColor, bgColor }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-2 py-1 text-sm inset-ring"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {skillName}
    </span>
  );
}

function SkillList() {
  return (
    <div className="flex flex-wrap gap-2">
      <Skill skillName="Python" bgColor="#306998" textColor="#FFD43B" />
      <Skill skillName="Javascript" bgColor="#F0DB4F" textColor="black" />
      <Skill skillName="ASP.NET" bgColor="#512bd4" textColor="white" />
    </div>
  );
}

export default SkillList;
