import React from "react";
import { SkillCards } from "./SkillCards";

const SkillSection = () => {
  return (
    <section id="skills" className="text-center   py-16 ">
      <h1 className="text-lg mx-auto w-full py-8 ">Skills</h1>
      <div className="max-w-5xl flex justify-center items-center  mx-auto px-8">
        <SkillCards />
      </div>
    </section>
  );
};

export default SkillSection;
