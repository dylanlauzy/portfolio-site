"use client";

import { useState } from "react";

import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";

const ProjectPreviews = () => {
  const [hoveredProject, setHoveredProject] = useState(-1);

  return (
    <TransitionWrapper
      delay={0.9}
      className="flex flex-col justify-end pb-6 2xl:pb-12 pt-6 gap-y-8 items-center grow max-w-5xl"
    >
      <div className="grow px-0 lg:px-10 flex aspect-video max-w-full">
        <div className="flex relative border-2 w-full">
          {hoveredProject >= 0 ? (
            <Image
              alt="project preview"
              src={projects[hoveredProject].image}
              fill={true}
              className="object-cover object-left-top"
            />
          ) : (
            <div className="text-gray-300 m-auto">Hover for preview</div>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className={`flex gap-x-5 py-4 px-8 ${
              index == 0 ? "border-t-2" : ""
            } border-b-2 items-end`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(-1)}
          >
            <div
              className={`flex flex-col gap-y-2 transition-transform ${
                hoveredProject === index ? "translate-x-2" : "translate-x-0"
              }`}
            >
              <div className="text-gray-500 text-xs w-40">{project.date}</div>
              <h3 className="relative text-xl w-max">
                {project.title}
                <span className="absolute -right-7 bottom-1 w-5 h-5">
                  <Image src="/icons/arrow.svg" alt="link icon" fill={true} />
                </span>
              </h3>
            </div>
            <div className="text-sm shrink line-clamp-3">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
    </TransitionWrapper>
  );
};

export default ProjectPreviews;
