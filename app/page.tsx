import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";


export default function Home() {
  return (
    <main className="px-2 lg:px-2 pb-10 ">
      {/* TASK : add section in which display the latest 2 youtube videos in grid and call to action to to redirect to youtube  */}
      <Hero/>
      <ProjectSection/>
      <SkillSection/>
    </main>
  );
}
