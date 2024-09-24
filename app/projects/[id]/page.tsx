import Image from "next/image";
import { projects } from "../../../data/projects_data";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const projectIndex = Number(id) - 1;
  const project = projects[projectIndex];
  const { name, image, company, overview, link, description } = project;

  return (
    <div>
      <article className="py-14 lg:py-20">
        <div className="px-20 mx-auto flex flex-col">
          <span className="uppercase mb-4 block">{company}</span>
          <h1 className="text-6xl mb-16">{name}</h1>

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="w-fit">
              <Image
                src={image}
                alt={`${name} image`}
                className="cursor-pointer aspect-square rounded-md mb-20 brightness-90 flex-shrink-1 w-full basis-1/2 max-w-[700px]"
              />
            </div>
            {overview ? (
              <div
                className="text-2xl leading-[1.35] font-thin flex-shrink-0 basis-1/2 projectOverview"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            ) : (
              <p className="text-2xl mb-16 w-2/3">{description}</p>
            )}
          </div>
          {link && (
            <a href={link} className="underline text-2xl font-medium">
              Link to Project
            </a>
          )}
        </div>
      </article>
    </div>
  );
};

export default ProjectPage;
