import Image from "next/image";
import React from "react";
import CompanyTag from "./CompanyTag";
import classNames from "classnames";
import Link from "next/link";

const ProjectCard = ({
  projectName,
  imageSrc,
  href = "#",
  className = "",
  description = "",
  showF22Badge = false,
  isFeatured = false,
}: {
  projectName: string;
  imageSrc: string;
  href?: string;
  className?: string;
  description?: string;
  showF22Badge?: boolean;
  isFeatured?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "group relative block overflow-hidden rounded-[2rem] transition-all duration-500",
        // Light Mode Base
        "bg-white border border-neutral-200 hover:border-[#E2FF3B] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]",
        // Dark Mode Base
        "dark:bg-neutral-900 dark:border-white/10 dark:hover:border-[#E2FF3B]/30 dark:hover:shadow-[0_0_30px_rgba(226,255,59,0.05)]",
        "aspect-square sm:aspect-video md:aspect-square lg:aspect-video",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={projectName}
        title={projectName}
        fill
        className={classNames(
          "object-cover transition-all duration-700 ease-out group-hover:scale-110",
          "opacity-70 grayscale-[10%] group-hover:grayscale-0 group-hover:opacity-100", // Light mode img
          "dark:opacity-40 dark:grayscale-[20%] dark:group-hover:opacity-70" // Dark mode img
        )}
      />

      {/* Dynamic Gradient Overlay */}
      <div className={classNames(
        "absolute inset-0 transition-opacity duration-500",
        "bg-gradient-to-t from-white via-white/20 to-transparent opacity-90 group-hover:opacity-100", // Light
        "dark:from-black dark:via-black/40 dark:to-transparent dark:opacity-80" // Dark
      )} />

      {/* Top Left: External Link Icon */}
      <div className="absolute top-5 left-5 h-10 w-10 flex items-center justify-center rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-white/20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
        <Image
          src="/svgs/arrowsquareout.svg"
          alt="Open"
          width={20}
          height={20}
          className="dark:invert" // Icon is black by default; inverts to white in dark mode
        />
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        {isFeatured && (
          <span className="px-3 py-1 bg-[#E2FF3B] text-black text-[10px] font-black rounded-full uppercase mb-4 inline-block shadow-sm">
            Featured
          </span>
        )}

        {showF22Badge && (
          <div className="mb-3 scale-90 origin-left">
            <CompanyTag />
          </div>
        )}

        <h3 className="text-xl font-bold transition-colors duration-300 text-neutral-900 dark:text-white group-hover:text-[#6d7c00] dark:group-hover:text-[#E2FF3B]">
          {projectName}
        </h3>

        {description && (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}

        <p className="text-xs font-bold tracking-wider uppercase mt-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 text-[#869900] dark:text-[#E2FF3B]">
          View Case Study →
        </p>
      </div>

      {/* Subtle border glow effect (Dark Mode Only) */}
      <div className="absolute inset-0 border-2 border-[#E2FF3B]/0 dark:group-hover:border-[#E2FF3B]/10 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
    </Link>
  );
};

export default ProjectCard;