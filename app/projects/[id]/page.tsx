import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
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
        <div className="max-w-7xl mx-auto flex flex-col">
          <span className="uppercase mb-4 block">{company}</span>
          <h1 className="text-6xl mb-12">{name}</h1>

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div>
              <div className="w-fit">
                <Image
                  src={image}
                  alt={`${name} image`}
                  className="aspect-square mb-8 rounded-md brightness-90 flex-shrink-1 w-full basis-1/2 max-w-[700px]"
                />
              </div>
              {link && (
                <a href={link} className="mb-8 font-medium block">
                  <Button variant="outline" size="lg">
                    View Live Project{" "}
                    <SquareArrowOutUpRight className="w-4 ml-2" />
                  </Button>
                </a>
              )}
            </div>
            {overview ? (
              <div
                className="text-2xl leading-[1.35] font-light flex-shrink-0 basis-1/2 projectOverview"
                dangerouslySetInnerHTML={{ __html: overview }}
              />
            ) : (
              <p className="text-2xl mb-16 w-2/3">{description}</p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectPage;
