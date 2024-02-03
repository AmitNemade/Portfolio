import Image from "next/image";
import React from "react";

const IconChip = ({ label, iconSrc }: { label: string; iconSrc?: string }) => {
  return (
    <div className="flex gap-2 items-center px-2 py-1.5 rounded-full bg-white shadow-1 border">
      {iconSrc && (
        <div className="w-4 h-4 rounded-full relative">
          <Image
            src={iconSrc}
            alt={label}
            fill
            className="object-cover inline-flex"
          />
        </div>
      )}
      <div className="text-black text-sm">{label}</div>
    </div>
  );
};

export default IconChip;
