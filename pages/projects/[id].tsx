"use client";
import IconChip from "@/components/IconChip";
import SkillCard from "@/components/SkillCard";
import { Project, data } from "@/utilities/data";
import classNames from "classnames";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context?.params?.id;
  const project: Project = data[typeof id === "string" ? id : ""];
  if (!project) {
    return { redirect: { destination: "/", permanent: false } };
  }
  return { props: { project } };
};

const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-white selection:bg-[#E2FF3B] selection:text-black font-sans transition-colors duration-500">

      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E2FF3B]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row max-w-[1600px] mx-auto">

        {/* LEFT: Project Media Sidebar */}
        <aside className="w-full xl:w-5/12 xl:h-screen xl:sticky xl:top-0 p-6 xl:p-12 flex flex-col justify-center">
          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-[#869900] dark:hover:text-[#E2FF3B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ARCHIVE
          </Link>

          <div className="relative aspect-square w-full group overflow-hidden rounded-[2.5rem] border border-neutral-200 dark:border-white/10 shadow-2xl bg-white dark:bg-neutral-900">
            <Image
              src={project.bannerImage}
              alt={project.name}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </aside>

        {/* RIGHT: Project Content */}
        <div className="flex-1 p-6 xl:p-12 xl:pl-0 space-y-12 my-auto">

          {/* Header Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#869900] dark:text-[#E2FF3B] font-mono text-xs uppercase tracking-widest font-bold">Project Spotlight</span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
                {project.name}
              </h1>
            </div>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Links */}
            {project.livePreviewLink && (
              <div className="flex flex-wrap gap-4 pt-4">
                {project.livePreviewLink.map((preview, index) => (
                  <Link
                    key={index}
                    href={preview.notAvailable ? "#" : preview.link}
                    target="_blank"
                    className={classNames(
                      "px-8 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg",
                      preview.notAvailable
                        ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                        : "bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-[#E2FF3B] dark:hover:bg-[#E2FF3B] hover:text-black active:scale-95"
                    )}
                  >
                    {preview.name ?? "Live Preview"}
                    {!preview.notAvailable && <span className="text-lg">↗</span>}
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* Important Note (If exists) */}
          {project.important_note && (
            <div className="relative overflow-hidden border border-amber-200 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5 p-6 rounded-3xl">
              <div className="flex gap-4">
                <span className="text-xl">💡</span>
                <div className="space-y-1">
                  <p className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tighter">System Note</p>
                  <p className="text-sm text-amber-900 dark:text-amber-200/80 leading-relaxed italic">
                    &quot;{project.important_note}&quot;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Skills Grid */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-4">
              Technologies Used
              <div className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10" />
            </h3>
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
          </section>

          {/* Tags */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-4">
              Project Tags
              <div className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <IconChip label={tag} key={tag} />
              ))}
            </div>
          </section>

        </div>
      </div>

      <footer className="p-12 text-center text-neutral-400 text-xs font-mono border-t border-neutral-200 dark:border-white/5">
        &copy; 2026 AMIT NEMADE • CASE STUDY: {project.name.toUpperCase()}
      </footer>
    </main>
  );
};

export default ProjectDetail;