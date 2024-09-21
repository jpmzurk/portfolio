import Image from "next/image";
import { projects } from "../projectsData";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const projectIndex = Number(id) - 1;
  const project = projects[projectIndex];
  const { name, image, blurb } = project;

  return (
    <div>
      <div>
        <h1 className="text-lg text-white"> {name}</h1>
        <p className="text-sm text-white">{blurb}</p>
        <Image
          src={image}
          alt={`${name} image`}
          style={{
            width: "100px",
            height: "100px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
