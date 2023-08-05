"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "../data/projects.json";

const ProjectPreviews = () => {
  const [hoveredImage, setHoveredImage] = useState("");

  return (
    <section className="flex flex-col gap-y-8 items-center grow max-w-3xl">
      <div className="relative flex w-[35rem] h-80 border-2">
        {hoveredImage ? (
          <Image
            alt="project preview"
            src={hoveredImage}
            fill={true}
            className="object-cover"/>
        ) : (
          <div className="text-gray-300 m-auto">Hover for preview</div>
        )}
      </div>

      <div className="flex flex-col w-full h-72 overflow-scroll">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex gap-x-5 py-4 px-8 ${
              index == 0 ? "border-t-2" : ""
            } border-b-2 items-end`}
            onMouseEnter={() => setHoveredImage(project.image)}
            onMouseLeave={() => setHoveredImage("")}
          >
            <div className="flex flex-col gap-y-2">
              <div className="text-gray-500 text-xs">{project.date}</div>
              <h3 className="text-xl w-40">{project.title}</h3>
            </div>
            <div className="text-sm shrink line-clamp-3">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPreviews;
