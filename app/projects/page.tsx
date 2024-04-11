"use client";
import ProjectList from "@/components/ProjectList";
import SectionHeading from "@/components/SectionHeading";
import { categoryList } from "@/lib/data";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("All");
  return (
    <div className=" text-center ">
      <SectionHeading heading={"All Projects"} className="lg:mb-2 border-0" />
      <div
        role="tablist"
        className="tabs tabs-bordered w-fit flex flex-wrap justify-center max-lg:space-y-4 "
      >
        {categoryList.map((category, idx) => (
          <button
            role="tab"
            key={idx}
            onClick={() => setName(category)}
            className={`tab ${category === name && "tab-active"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <ProjectList category={name} />
    </div>
  );
};

export default page;
