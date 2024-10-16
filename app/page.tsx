import { Button } from "@/components/ui/button";
import profilePic from "@/public/images/profile.jpg";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects_data";
import { Experience } from "./about/experience";
import { Skills } from "./about/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 md:p-12 lg:p-16 sm:mt-10">
      <div className="flex flex-col lg:flex-row border-b-2 border-white pb-4 sm:pb-20 mb-20 gap-8">
        <div className="basis-2/3 homeHeading">
          <h1 className="text-3xl sm:text-4xl mb-8 font-semibold leading-[1.1]">
            Software Engineer that enjoys transforming technical problems into
            delightful user experiences.
          </h1>
          <p className="text-2xl leading-snug w-5/6 text-left font-light xl:block">
            Based in Minneapolis, MN, I have experience in a variety of tech
            stacks but focus on React, TypeScript, Node and Postgres. Most
            recently I worked at a startup called Omnia Fishing as a Front-End
            engineer.
          </p>
        </div>
        <div className="mb-4 lg:ml-auto lg:mb-0">
          <Image
            src={profilePic}
            alt="profile picture of the author"
            className="rounded-md aspect-square max-w-full lg:max-w-[400px]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 890px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="border-b-2 border-white pb-20 mb-20">
        <div>
          <h2 className="mb-12 uppercase font-light text-5xl">Projects</h2>
          <div className="grid gap-y-12 lg:grid-cols-3 gap-x-6 lg:gap-x-8 list-none gap-12">
            {projects.slice(0, 3).map((project) => {
              return (
                <li
                  key={project.id}
                  className="flex-0 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="h-full flex flex-col">
                    <Link href={`/projects/${project.id}`} passHref>
                      <Image
                        src={project.image}
                        alt={`${project.name} image`}
                        className="aspect-square cursor-pointer rounded-[6px]"
                      />
                    </Link>
                    <span className="text-xl mb-4 uppercase font-medium mt-4 block">
                      {project.name}
                    </span>
                    <figcaption className="h-full flex flex-col">
                      <p className="my-4">{project.description}</p>
                      <Link
                        href={`/projects/${project.id}`}
                        passHref
                        className="mt-auto"
                      >
                        <Button variant="outline">
                          View Project <ArrowUpRight className="w-4 ml-2" />
                        </Button>
                      </Link>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <Link className={"mt-8 underline text-right flex"} href={`/projects`}>
            SEE ALL PROJECTS <MoveRight className="w-4 ml-2" />
          </Link>
        </div>
      </div>
      <Skills />
      <Experience />
    </div>
  );
}
