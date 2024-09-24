import { Button } from "@/components/ui/button"; // Assuming your Button component is located here
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects_data";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 pb-16">
      <h1 className="text-left text-5xl mb-12 uppercase">Projects</h1>
      <div className="flex flex-col justify-center items-center">
        <ul className="grid gap-y-12 md:grid-cols-2 gap-x-6 lg:gap-x-14  lg:gap-y-20">
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <figure className="h-full flex flex-col">
                  <Link href={`/projects/${project.id}`} passHref>
                    <Image
                      src={project.image}
                      alt={`${project.name} image`}
                      className="cursor-pointer aspect-square rounded-[6px]"
                    />
                  </Link>

                  <figcaption className="h-full flex flex-col">
                    <h2 className="my-4 text-xl">{project.name}</h2>
                    <p>{project.description}</p>
                    <Link
                      href={`/projects/${project.id}`}
                      passHref
                      className="mt-auto"
                    >
                      <Button className="mt-3" variant="outline">
                        View Project
                      </Button>
                    </Link>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
