import React from 'react'
import ProjectCard from './ProjectCard'
import { projectdata } from '@/lib/data';

const ProjectSection = () => {
  return (
    <div className=' text-center pt-16' id='projects'>
      <h1 className=''>Projects</h1>
      {/* TASK : add the tabs section to filter the Projects */}
    <div className='w-full flex  justify-center gap-10 items-center flex-wrap py-10'>
        {projectdata.map((project) => (
          
          <ProjectCard
            key={project.id}
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
  )
}

export default ProjectSection