import React from "react";
import ProjectCard from "./ProjectCard";
import { projectdata } from "@/lib/data";

const ProjectSection = () => {
  return (
    <div className=" text-center pt-16" id="projects">
      <h1 className="">Projects</h1>
      {/* TASK : add the tabs section to filter the Projects */}
      <div className=" grid grid-col-2 lg:grid-cols-2 mx-auto gap-8  w-fit max-lg:px-4  py-10">
        {projectdata.map((project,idx) => (
          <ProjectCard
            key={project.title + idx}
            title={project.title}
            link={project.link}
            src={project.src}
            description={project.description}
            category={project.category}
            // techstack={project.techstack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
