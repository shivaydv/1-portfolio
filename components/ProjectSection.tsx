import React from "react";
import ProjectCard from "./ProjectCard";
import { projectdata } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className=" text-center pt-16" id="projects">
      <SectionHeading heading={"Projects"} />
      <div className=" grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8  w-fit max-lg:px-4  py-10 ">
        {
          projectdata.map((project, idx) => (
          <ProjectCard
          key={project.title + idx}
          title={project.title}
          github={project.github}
          link={project.link}
          src={project.src}
          description={project.description}         
          />))
        }
      </div>
      <Link href="/projects" className="btn btn-outline ">All Projects</Link>
    </div>
  );
};

export default ProjectSection;

{/* TASK : add the tabs section to filter the Projects */}