import { Button } from "@/components/ui/button"; // Assuming your Button component is located here
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projectsData";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <figure>
                <Link href={`/projects/${project.id}`} passHref>
                  <Image
                    src={project.image}
                    alt={`${project.name} image`}
                    style={{
                      width: "100px",
                      height: "100px",
                      cursor: "pointer",
                    }}
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
      </ul>
    </div>
  );
};

export default ProjectsPage;
