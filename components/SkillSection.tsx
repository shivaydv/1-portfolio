import React from "react";
import { SkillCards } from "./SkillCards";
import SectionHeading from "./SectionHeading";

const SkillSection = () => {
  return (
    <section id="skills" className="text-center   py-16 ">
      <SectionHeading heading="Skills" className="mb-6"/>
      <div className="max-w-5xl flex justify-center items-center  mx-auto px-8">
        <SkillCards />
      </div>
    </section>
  );
};

export default SkillSection;
