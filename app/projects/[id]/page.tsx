import Image from "next/image";
import { projects } from "../../../data/projects_data";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const projectIndex = Number(id) - 1;
  const project = projects[projectIndex];
  const { name, image, company, overview } = project;

  return (
    <div>
      <article className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto flex flex-col">
          <span className="uppercase mb-4 block">{company}</span>
          <h1 className="text-6xl mb-16">{name}</h1>
          {/* <p className="text-2xl mb-16 self-center w-2/3">{description}</p> */}
          <Image
            src={image}
            alt={`${name} image`}
            className="cursor-pointer rounded-md mb-20 brightness-90"
          />
          <p className=" text-2xl leading-[1.25] font-thin ">{overview}</p>
        </div>
      </article>
    </div>
  );
};

export default ProjectPage;
