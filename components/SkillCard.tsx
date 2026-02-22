import classNames from "classnames";
import Image from "next/image";
import React from "react";

const SkillCard = ({
  name,
  imageSrc,
  size = 40,
  labelClasname = "",
}: {
  name: string;
  imageSrc: string;
  labelClasname?: string;
  size?: number;
}) => {
  return (
    <div className={classNames(
      "group relative w-[110px] h-[110px] flex flex-col items-center justify-center gap-3 transition-all duration-300 rounded-[2rem] hover:-translate-y-1",
      // Light Mode Styles
      "bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#E2FF3B]/50",
      // Dark Mode Styles
      "dark:bg-white/5 dark:border-white/10 dark:shadow-none dark:hover:bg-white/10 dark:hover:border-white/20"
    )}>

      {/* Background Glow Effect on Hover (Adapts to both modes) */}
      <div className="absolute inset-0 bg-[#E2FF3B]/10 dark:bg-[#E2FF3B]/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity rounded-[2rem]" />

      <div className="relative z-10 flex items-center justify-center h-10 w-10">
        <Image
          src={imageSrc}
          alt={name}
          title={name}
          width={size}
          height={size}
          className={classNames(
            "object-contain transition-all duration-300 group-hover:scale-110",
            // Logic to handle image visibility (e.g., inverting dark logos in dark mode if needed)
            "drop-shadow-[0_0_8px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]",
            "group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          )}
        />
      </div>

      <span
        className={classNames(
          "relative z-10 text-[11px] font-mono tracking-wider uppercase transition-colors",
          "text-neutral-500 group-hover:text-black", // Light mode text
          "dark:text-neutral-500 dark:group-hover:text-white", // Dark mode text
          labelClasname
        )}
      >
        {name}
      </span>

      {/* Subtle Corner Accent */}
      <div className={classNames(
        "absolute top-3 right-3 h-1.5 w-1.5 rounded-full transition-colors",
        "bg-neutral-200 group-hover:bg-[#869900]", // Light mode dot
        "dark:bg-white/10 dark:group-hover:bg-[#E2FF3B]" // Dark mode dot
      )} />
    </div>
  );
};

export default SkillCard;