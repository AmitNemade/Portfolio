import classNames from "classnames";
import Image from "next/image";
import React from "react";

const SkillCard = ({
  name,
  imageSrc,
  size = 50,
  labelClasname = "",
}: {
  name: string;
  imageSrc: string;
  labelClasname?: string;
  size?: number;
}) => {
  return (
    <div className="w-[100px] h-[100px] flex flex-col items-center gap-2 justify-center relative bg-white shadow-1 border p-1 rounded-3xl">
      <Image
        src={imageSrc}
        alt={name}
        title={name}
        width={size}
        height={size}
        className={classNames(
          "object-contain lg:object-cover rounded-lg max-w-[40px] max-h-[40px] lg:max-w-max lg:max-h-max",
          size && `lg:min-h-[${size}px]`
        )}
      />
      <div
        className={classNames(
          "text-sm text-center font-medium text-black",
          labelClasname
        )}
      >
        {name}
      </div>
    </div>
  );
};

export default SkillCard;
