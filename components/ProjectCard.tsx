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
  showF22Badge = false,
}: {
  projectName: string;
  imageSrc: string;
  href?: string;
  className?: string;
  showF22Badge?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "shadow-1 h-[calc(100vw/2-48px)] sm:h-full border group relative overflow-clip cursor-pointer bg-white rounded-3xl",
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={projectName}
        title={projectName}
        fill
        className="object-cover z-0 group-hover:scale-125 transition-all"
      />
      <div className="absolute top-4 left-4 rounded-lg scale-0 h-9 w-9 bg-white shadow-md p-2 group-hover:scale-100 transition-all">
        <Image
          src={"/svgs/arrowsquareout.svg"}
          alt="Open in new tab"
          title="Open project"
          width={20}
          height={20}
          className=""
        />
      </div>
      <div className="absolute border bottom-4 left-4 rounded-lg bg-white shadow-md text-black px-2 py-1.5 font-light">
        {projectName}
      </div>
      {showF22Badge && <CompanyTag />}
    </Link>
  );
};

export default ProjectCard;
