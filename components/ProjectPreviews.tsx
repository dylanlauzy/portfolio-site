"use client";

import { useState } from "react";
import Image from "next/image";
import projects from "../data/projects.json";

const ProjectPreviews = () => {
  const [hoveredImage, setHoveredImage] = useState("");

  return (
    <section className="flex flex-col pb-6 2xl:pb-12 2xl:pt-6 gap-y-8 items-center grow max-w-3xl">
      <div className="grow px-0 md:px-24 lg:px-10 flex w-full">
        <div className="flex relative border-2 w-full max-h-96">
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
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex gap-x-5 py-4 px-8 ${
              index == 0 ? "border-t-2" : ""
            } border-b-2 items-end`}
            onMouseEnter={() => setHoveredImage(project.image)}
            onMouseLeave={() => setHoveredImage("")}
          >
            <div className="flex flex-col gap-y-2 transition-transform hover:translate-x-2">
              <div className="text-gray-500 text-xs w-40">{project.date}</div>
              <h3 className="relative text-xl w-max">
                {project.title}
                <span className="absolute -right-7 bottom-1 w-5 h-5">
                  <Image src="/icons/arrow.svg" alt="link icon" fill={true}/>
                </span>
              </h3>
              
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
