import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { BoxCard, HorizontalCard } from "@/components/Card";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex items-center xl:items-start flex-col gap-10 xl:flex-row min-h-screen max-h-screen overflow-auto justify-between">
      <div className="flex max-w-2xl w-full xl:w-1/3 2xl:w-2/5 items-center xl:items-start xl:sticky top-0 gap-8  flex-col p-6 xl:p-16 sm:pr-0">
        <div className="h-44 w-44 min-h-[176px] relative">
          <Image
            src="/images/profile_picture.jpg"
            alt="Amit Nemade Portfolio"
            title="Amit Nemade - Web Developer | ReactJS | NextJS | Flutter"
            fill
            className="w-full h-full top-0 left-0  object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3 text-center xl:text-left">
          <h1 className="text-5xl leading-tight">
            <strong>Amit Nemade</strong>
          </h1>
          <div className="dark:text-neutral-300 text-neutral-600 text-xl font-light">
            Hey! I am Amit Nemade, a Frontend Developer dedicated to
            transforming visions into captivating digital experiences.
            Proficient in crafting pixel-perfect, responsive designs, I thrive
            on pushing the boundaries of innovation to create visually stunning
            and user-centric interfaces.
          </div>
          <div className="dark:text-neutral-300 text-neutral-600 text-xl font-light">
            ✉️ amitnemade34@gmail.com
          </div>
          <div className="dark:text-neutral-300 text-neutral-600 text-xl font-light">
            📍 India
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full xl:w-2/3 2xl:w-3/5 p-6 lg:p-16 2xl:pl-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
          <div className="grid grid-cols-2 gap-10">
            <BoxCard
              iconSrc="/svgs/linkedin.svg"
              label="LinkedIn"
              description="@amitnemade"
              buttonText="Connect"
              buttonClassName="bg-[rgb(85,172,238)]"
              cardClassName="bg-[rgb(85,172,238)]/5 hover:bg-[rgb(85,172,238)]/10"
              href="https://www.linkedin.com/in/amitnemade/"
            />
            <BoxCard
              iconSrc="/svgs/instagram.svg"
              label="Instagram"
              description="@amit_nemade"
              buttonText="Follow"
              buttonClassName="bg-[#C837AB]"
              cardClassName="bg-[#C837AB]/5  hover:bg-[#C837AB]/10"
              href="https://instagram.com/amit_nemade"
            />
            <HorizontalCard
              iconSrc="/svgs/github.svg"
              label="Github"
              description="@AmitNemade"
              cardClassName="bg-[rgb(85,172,238)]/5 !flex-row col-span-full hover:bg-[rgb(85,172,238)]/10"
              href="https://github.com/AmitNemade"
            />
            <HorizontalCard
              iconSrc="/svgs/medium.svg"
              label="Medium"
              description="@amit_nemade"
              cardClassName="bg-[rgb(85,172,238)]/5 !flex-row col-span-full hover:bg-[rgb(85,172,238)]/10"
            />
          </div>
          <div className="flex items-center gap-4 border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex-col p-10 rounded-3xl border dark:border-neutral-50/20 tracking-normal">
            <Image
              src="/svgs/Amit_QR.svg"
              width={160}
              height={160}
              className="bg-transparent"
              alt="QR code for vCard"
              title={"Scan this QR to know more" ?? ""}
            />
            <div className="flex gap-1 flex-col items-center">
              <div className="text-4xl text-[#FFDD06] mt-4 leading-tight font-light">
                <strong>Amit Nemade</strong>
              </div>
              <div className="text-lg text-black dark:text-white font-light">
                Frontend Developer
              </div>
              <div className="text-sm text-black dark:text-white/60 font-light">
                ReactJS | Next.JS | Flutter
              </div>
            </div>
            <div className="flex flex-col items-center mt-auto gap-4">
              <div className="text-lg text-[#FFDD06] font-light">
                @amit_nemade
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Image
                  src="/svgs/linkedin.svg"
                  width={20}
                  height={20}
                  className="bg-transparent"
                  alt="LinkedIn"
                  title="Visit linkedIn profile"
                />
                <Image
                  src="/svgs/github.svg"
                  width={20}
                  height={20}
                  className="bg-transparent"
                  alt="Github"
                  title="Visit github profile"
                />
                <Image
                  src="/svgs/instagram.svg"
                  width={20}
                  height={20}
                  className="bg-transparent"
                  alt="Instagram"
                  title="Visit instagram profile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full mt-20">
          <div className="text-lg font-medium p-4">My Projects</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:gap-10">
            <ProjectCard
              projectName="Network FP Portal"
              imageSrc="/images/nfp-portal.webp"
              href="/projects/nfp-portal"
              className="sm:aspect-square"
              showF22Badge
            />
            <div className="grid grid-cols-1 gap-6 lg:gap-10">
              <ProjectCard
                projectName="NFP Member directory"
                imageSrc="/images/nfp-portal.webp"
                href="/projects/nfp-members-directory"
                className="col-span-full"
                showF22Badge
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                <ProjectCard
                  projectName="Partners Directory"
                  imageSrc="/images/nfp-portal.webp"
                  href="/projects/nfp-partners-directory"
                  showF22Badge
                />
                <ProjectCard
                  projectName="NFP App"
                  imageSrc="/images/nfp-portal.webp"
                  href="/projects/nfp-app"
                  showF22Badge
                />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-col-cols-1 sm:grid-cols-2 gap-10 mt-10">
            <div className="grid grid-cols-1 gap-10">
              <ProjectCard
                projectName="AstroAI"
                imageSrc="/images/nfp-portal.webp"
                href="/projects/astro-ai"
              />
              <ProjectCard
                projectName="IRCTC Tatkal Autofill Extension"
                imageSrc="/images/irctctool.png"
                href="/projects/irctc-tatkal-extension"
              />
            </div>
            <ProjectCard
              projectName="Compatibility"
              imageSrc="/images/compatibility.webp"
              href="/projects/compatibility"
              className="sm:aspect-square"
              showF22Badge
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-full mt-20">
          <div className="text-lg font-medium p-4">Skills</div>
          <div className="flex flex-wrap gap-4 lg:gap-10">
            <SkillCard name="ReactJS" imageSrc="/images/reactjs.png" />
            <SkillCard name="Next.Js" imageSrc="/images/nextjs.png" />
            <SkillCard
              name="Flutter"
              imageSrc="/images/flutter.png"
              size={40}
            />
            <SkillCard name="Redux" imageSrc="/images/redux.png" />
            <SkillCard
              name="TailwindCSS"
              imageSrc="/images/tailwind.png"
              labelClasname="mt-5"
            />
            <SkillCard name="MaterialUI" imageSrc="/images/materialui.png" />
            <SkillCard
              name="Ant Design"
              imageSrc="/images/antdesign.png"
              size={40}
            />
            <SkillCard name="NodeJs" imageSrc="/images/nodejs.png" size={45} />
            <SkillCard
              name="ExpressJs"
              imageSrc="/images/expressjs.png"
              size={45}
            />
            <SkillCard
              name="MongoDB"
              imageSrc="/images/mongodb.png"
              size={45}
            />
            <SkillCard
              name="Javascript"
              size={45}
              imageSrc="/images/javascript.png"
            />
            <SkillCard name="Typescript" imageSrc="/images/typescript.png" />
            <SkillCard name="Wordpress" imageSrc="/images/wordpress.webp" />
            <SkillCard
              name="Chrome Extension"
              size={50}
              imageSrc="/images/chrome_extension.png"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-full mt-20">
          <div className="text-lg font-medium">About Me</div>
          <div className="flex flex-col lg:gap-10 pr-0 w-full text-lg font-medium dark:text-white text-black">
            <div>
              I am Amit Nemade, a Frontend Developer with a dedication to
              crafting fully responsive and elegant designs that seamlessly
              adapt to various devices, ensuring a visually pleasing and
              user-friendly experience.
            </div>
            <div>
              My core skills includes ReactJS, NextJS and Flutter with
              experience in other frameworks like TailwindCSS, Ant Designs,
              Bootstrap and Material UI.
            </div>
            <div>
              In addition, I possess expertise in developing Chrome browser
              extensions, expanding my skill set to enhance user experiences
              through innovative solutions.
            </div>
            <div>
              I am a creative and joyful individual who has a passion for
              traveling, gaming, and music. Exploring new destinations,
              immersing myself in diverse cultures, and enjoying various
              landscapes not only brings me happiness but also serves as a
              wellspring of inspiration for innovative thinking.
            </div>
          </div>
        </div>
        <div className="w-full mt-20">
          <ContactForm />
        </div>
        <div className="h-36 lg:h-72" />
      </div>
    </main>
  );
}
