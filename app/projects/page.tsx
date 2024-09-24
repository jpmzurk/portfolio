import { Button } from "@/components/ui/button"; // Assuming your Button component is located here
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects_data";

const ProjectsPage = () => {
  return (
    <>
      <div>
        <h1 className="w-full max-w-5xl text-left text-5xl mb-6">Projects</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="grid gap-y-12 md:grid-cols-2 gap-x-6 lg:gap-x-24 max-w-5xl">
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <figure>
                  <Link href={`/projects/${project.id}`} passHref>
                    <Image
                      src={project.image}
                      alt={`${project.name} image`}
                      className="cursor-pointer aspect-square rounded-[6px]"
                    />
                  </Link>

                  <figcaption>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <Link href={`/projects/${project.id}`} passHref>
                      <Button style={{ marginTop: "10px" }}>
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
    </>
  );
};

export default ProjectsPage;
