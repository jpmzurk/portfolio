import profilePic from "@/public/images/profile-two.jpg";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex  max-w-5xl mx-auto  mt-8 flex-col ">
      <div className="flex gap-8 border-b-2 border-white pb-12 flex-col lg:flex-row">
        <div className="basis-1/2 order-2 lg:order-1">
          <p className="mb-6 text-2xl ">
            I&apos;m a full stack developer that loves turning complex technical
            challenges into intuitive user-friendly software. I focus on
            creating engaging UIs using React / Next but also enjoy building and
            modifying API&apos;s when the project calls for it.
          </p>
          <p className="text-2xl">
            I am also a person outside of work where I am the singer-songwriter
            / audio engineer / producer for Minneapolis band{" "}
            <a
              href={"https://www.instagram.com/big_lake_music/?hl=en"}
              className="underline"
            >
              Big Lake
            </a>
            .
          </p>
        </div>
        <div className="basis-1/2 order-1 mb-4 lg:order-2 lg:mb-0">
          <Image
            src={profilePic}
            alt="profile picture"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="border-b-2 border-white pb-12">
        <p className="text-white mt-12 text-6xl mb-6">SKILLS</p>
        <ul className="skills">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Mapbox</li>
          <li>Sass / Less</li>
          <li>Node.js</li>
          <li>Postgres</li>
          <li>Rails</li>
          <li>AWS S3</li>
          <li>Jest</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className="pb-12 mt-12">
        <p className="text-white text-6xl mb-6">Experience</p>

        <div className="mt-8">
          <p className="text-2xl font-bold">Omnia Fishing</p>
          <p className="text-xl italic">
            Frontend Engineer — React / Typescript / Rails / Postgres
          </p>
          <p className="text-sm mb-4">4/22 - 9/24</p>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-bold">Carpet One - Bloomington, MN</p>
          <p className="text-xl italic">
            Full Stack Developer — React / Typescript / Node / Postgres
          </p>
          <p className="text-sm mb-4">1/22 - 4/22</p>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-bold">Keenspace Marketing</p>
          <p className="text-xl italic">
            Frontend Developer — HTML / CSS / JS / PHP
          </p>
          <p className="text-sm mb-4">3/21 - 4/22</p>
        </div>

        {/* Runic */}
        <div className="mt-8">
          <p className="text-2xl font-bold">Runic</p>
          <p className="text-xl italic">
            Full Stack Developer — React Native / Node / Firebase
          </p>
          <p className="text-sm mb-4">10/20 - 12/20</p>
        </div>

        <div className="mt-8">
          <p className="text-2xl font-bold">Prime Digital Academy</p>
          <p className="text-xl italic">
            Full Stack Student — React / Node / Postgres
          </p>
          <p className="text-sm mb-4">6/20 - 10/20</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
