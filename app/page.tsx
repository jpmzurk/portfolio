import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/projectsData";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl mb-6">
        I'm a software engineer passionate about finding user-focused solutions
        to technical problems.
      </h1>
      <p className="text-2xl mb-32">
        I'm currently a freelance software engineer based in Minneapolis, MN. I
        have experience working with a variety of technologies, including React,
        TypeScript, and Node.js.
      </p>

      <div className="flex list-none gap-6">
        {projects.slice(0, 3).map((project) => {
          return (
            <li key={project.id} className="flex-1 basis-1/3">
              <figure>
                <Link href={`/projects/${project.id}`} passHref>
                  <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    className="object-cover aspect-[1.25/1] cursor-pointer rounded-md"
                  />
                </Link>

                <figcaption>
                  <h2>{project.name}</h2>
                  <p>{project.blurb}</p>
                  <Link href={`/projects/${project.id}`} passHref>
                    <Button style={{ marginTop: "10px" }}>View Project</Button>
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
