import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <div className=" text-center pt-16" id="projects">
      <SectionHeading heading={"Projects"} />
      <ProjectList category="Featured" />
      <Link href="/projects" className="btn btn-outline ">
        All Projects
      </Link>
    </div>
  );
};

export default ProjectSection;

{
  /* TASK : add the tabs section to filter the Projects */
}
