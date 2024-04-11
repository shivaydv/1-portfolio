"use client";
import { projectdata } from "@/lib/data";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ category = "All" }: { category?: string }) => {
  const [filteredProjects, setFilteredProjects] = useState(
    category === "All"
      ? projectdata
      : projectdata.filter((project) => project.category.includes(category))
  );
  useEffect(() => {
    setFilteredProjects(
      category === "All"
        ? projectdata
        : projectdata.filter((project) => project.category.includes(category))
    );
  }, [category]);

  return (
    <div>
      {filteredProjects.length > 0 ? (
        <div className=" grid  lg:grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 mx-auto   w-fit max-lg:px-4  py-10 ">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.title + idx}
              title={project.title}
              github={project.github}
              link={project.link}
              src={project.src}
              description={project.description}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl mt-6">No Projects Found</h1>
      )}
    </div>
  );
};

export default ProjectList;
