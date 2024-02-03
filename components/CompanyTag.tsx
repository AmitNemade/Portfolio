import Image from "next/image";
import React from "react";

const CompanyTag = () => {
  return (
    <div className="absolute border flex items-center text-sm top-4 right-4 rounded-lg bg-white shadow-md text-black px-2 py-1.5 gap-1">
      <Image
        src="/svgs/f22labs.svg"
        alt="F22 Labs"
        title="Project with F22 Labs"
        height={24}
        width={24}
        className="object-cover inline-flex"
      />
    </div>
  );
};

export default CompanyTag;
