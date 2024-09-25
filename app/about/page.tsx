import { Skills } from "@/app/about/skills";
import profilePic from "@/public/images/profile-three.jpg";
import Image from "next/image";
import { Experience } from "./experience";

const AboutPage = () => {
  return (
    <div className="flex  max-w-5xl mx-auto  mt-12 flex-col ">
      <div className="flex gap-8 border-b-2 border-white pb-12 flex-col md:flex-row mb-12">
        <div className="basis-1/2 order-2 md:order-1">
          <p className="mb-6 text-2xl font-light ">
            I&apos;m a full stack developer that loves turning complex technical
            challenges into intuitive user-friendly software. I focus on
            creating engaging UIs with React and NextJS but also enjoy building
            and modifying API&apos;s when the project calls for it.
          </p>
          <p className="mb-6 text-2xl font-light">
            I enjoy simplicity in whatever I work on, whether that is the
            product or the implementations. I also like iterating to find the
            best version of a thing and making it stable and easy to use.
          </p>
          <p className="mb-6 text-2xl font-light">
            Aside from the multiverse of strategic approaches to writing
            maintainable code, I've found that communicating clearly, listening
            with intention, questioning my assumptions, and continually putting
            myself in the user's shoes are the best ways to impact users.
          </p>
          <p className="text-2xl font-light">
            I am a person outside of work where I am the singer-songwriter /
            audio engineer / producer for Minneapolis band{" "}
            <a
              href={"https://www.instagram.com/big_lake_music/?hl=en"}
              className="underline"
            >
              Big Lake
            </a>
            .
          </p>
        </div>
        <div className="basis-1/2 order-1 mb-4 md:order-2 lg:mb-0">
          <Image
            src={profilePic}
            alt="profile picture"
            className="rounded-md"
          />
        </div>
      </div>
      <Skills />
      <Experience />
    </div>
  );
};

export default AboutPage;
