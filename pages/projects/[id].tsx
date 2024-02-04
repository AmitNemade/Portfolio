import IconChip from "@/components/IconChip";
import SkillCard from "@/components/SkillCard";
import { Project, data } from "@/utilities/data";
import classNames from "classnames";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context?.params?.id;
  const project: Project = data[typeof id === "string" ? id : ""];
  if (project === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { project } };
};

const NfpPortal = ({ project }: { project: Project }) => {
  return (
    <main className="flex flex-col gap-10 lg:flex-row min-h-screen max-h-screen overflow-auto justify-between">
      <div className="hidden lg:flex m-6 max-w-md max-h-[448px] aspect-square relative w-full lg:sticky top-6 lg:top-16 lg:m-16 pr-0 lg:mb-0 lg:mr-0">
        <Image
          src={project.bannerImage}
          alt={project.name}
          title={project.name}
          fill
          className="object-cover border shadow-1 transition-all rounded-3xl"
        />
      </div>
      <Image
        src={project.bannerImage}
        alt={project.name}
        title={project.name}
        width={386}
        height={386}
        className="object-cover m-6 lg:hidden transition-all rounded-3xl"
      />
      <div className="lg:p-16 flex w-full p-6 lg:pl-0 min-h-screen">
        <div className="w-full">
          <div className="flex flex-col items-start w-full gap-6 lg:gap-10">
            <div className="text-2xl md:text-3xl lg:text-5xl font-medium tracking-normal">
              <div className="text-lg md:text-xl lg:text-2xl mb-2 lg:mb-2">
                Project Name:
              </div>
              <h1>
                <strong>{project.name}</strong>
              </h1>
            </div>
            <div className="dark:text-neutral-300 text-neutral-600 text-base md:text-lg lg:text-xl font-light">
              {project.description}
            </div>
            {project.livePreviewLink && (
              <div className="flex flex-wrap gap-3">
                {project.livePreviewLink.map((preview, index) => (
                  <Link
                    key={index}
                    href={preview.notAvailable ? "#" : preview.link}
                    target="_blank"
                    className={classNames(
                      "bg-black dark:bg-white flex items-center gap-2 dark:text-black rounded-full p-2 text-sm text-white",
                      !preview.notAvailable &&
                        "hover:animate-glow dark:hover:animate-glowDark"
                    )}
                  >
                    {preview.name ?? "Live Preview"}
                  </Link>
                ))}
              </div>
            )}
            {project.important_note && (
              <div className="flex flex-col gap-2 w-full border border-gray-200 dark:border-white/20 bg-white/10 rounded-xl px-4 py-2">
                <div className="text-xs font-medium text-neutral-400">
                  Important Note:
                </div>
                <div className="text-sm text-gray-500 dark:text-white">
                  {project.important_note}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4 items-start">
              <div className="text-base md:text-lg lg:text-2xl">
                Skills Used:
              </div>
              <div className="flex flex-wrap gap-4">
                {project.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    imageSrc={skill.iconSrc}
                    labelClasname={skill.labelClasname}
                    size={skill.size}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div className="text-base md:text-lg lg:text-2xl">Tags:</div>
              <div className="flex flex-wrap gap-4">
                {project.tags.map((tag) => (
                  <IconChip label={tag} key={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NfpPortal;
