"use client"
import { categoryList } from "@/lib/data";
import React, { useState } from "react";
import ProjectList from "./ProjectList";

const CategoryTabs = () => {
    const [name, setName] = useState("All");
  return (
    <div>

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
  )
}

export default CategoryTabs