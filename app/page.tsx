import { Button } from "@/components/ui/button";
import profilePic from "@/public/images/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects_data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 md:p-32 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col lg:flex-row border-b-2 border-white pb-20 mb-20 gap-8">
        <div className="basis-2/3 order-2 lg:order-1">
          <h1 className="text-5xl mb-8 font-semibold leading-[1.1]">
            I&apos;m a developer that enjoys turning complex technical problems
            into user-focused solutions.
          </h1>
          <p className="text-2xl leading-snug w-5/6 text-left font-thin lg:hidden xl:block">
            Based in Minneapolis, MN and have experience working with a variety
            of tech, including React, TypeScript, Node.js, Postgres and more.
            Most recently I worked at a startup called Omnia Fishing as a
            software engineer.
          </p>
        </div>
        <div className="order-1 mb-4 lg:order-2 lg:mb-0 lg:ml-auto">
          <Image
            src={profilePic}
            alt="profile picture"
            className="rounded-md lg:max-w-[400px] aspect-square"
          />
        </div>
      </div>

      <div className="border-b-2 border-white pb-20 mb-20">
        <p className="text-white text-6xl mb-6">SKILLS</p>
        <ul className="skills">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass / Less</li>
          <li>Mapbox</li>
          <li>Node.js</li>
          <li>Rails</li>
          <li>Restful Apis</li>
          <li>Postgres</li>
          <li>AWS S3</li>
          <li>Jest</li>
          <li>Redux</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>

      <div className="flex list-none gap-12">
        {projects.slice(0, 3).map((project) => {
          return (
            <li key={project.id} className="flex-1 basis-1/3">
              <figure>
                <h2 className="text-xl mb-4 uppercase font-medium">
                  {project.name}
                </h2>
                <Link href={`/projects/${project.id}`} passHref>
                  <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    className="aspect-square cursor-pointer rounded-[6px]"
                  />
                </Link>

                <figcaption>
                  <p className="my-4">{project.description}</p>
                  <Link href={`/projects/${project.id}`} passHref>
                    <Button
                      variant="outline"
                      className="hover:scale-110 transition-transform"
                    >
                      View Project
                    </Button>
                  </Link>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </div>
      <Link href={`/projects`}></Link>
    </div>
  );
}
