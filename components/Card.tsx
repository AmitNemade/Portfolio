import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export const BoxCard = ({
  iconSrc,
  label,
  description,
  buttonText,
  buttonClassName,
  cardClassName,
  href,
}: {
  iconSrc: string;
  label: string;
  description: string;
  buttonText?: string;
  buttonClassName?: string;
  cardClassName?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      className={classNames(
        "flex h-fit border-neutral-200 gap-3 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex-col p-5 rounded-3xl border dark:border-neutral-50/20 tracking-normal cursor-pointer w-full",
        cardClassName
      )}
    >
      <Image src={iconSrc} width={40} height={40} alt={label} title={label} />
      {(label || description) && (
        <div className="flex flex-col items-start gap-1">
          {label && <div className="text-sm">{label}</div>}
          {description && (
            <div className="text-xs text-neutral-500">{description}</div>
          )}
        </div>
      )}
      {buttonText && (
        <button
          className={classNames(
            "py-1.5 px-4 rounded-full text-xs font-bold w-fit tracking-normal text-white",
            buttonClassName
          )}
        >
          {buttonText}
        </button>
      )}
    </Link>
  );
};

export const HorizontalCard = ({
  iconSrc,
  label,
  description,
  cardClassName,
  href,
}: {
  iconSrc: string;
  label: string;
  description: string;
  cardClassName?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      className={classNames(
        "flex h-fit border-neutral-200 gap-3 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex-col p-5 rounded-3xl border dark:border-neutral-50/20 tracking-normal cursor-pointer w-full",
        cardClassName
      )}
    >
      <Image src={iconSrc} width={40} height={40} alt={label} title={label} />
      {(label || description) && (
        <div className="flex flex-col items-start gap-1">
          {label && <div className="text-sm">{label}</div>}
          {description && (
            <div className="text-xs text-neutral-500">{description}</div>
          )}
        </div>
      )}
    </Link>
  );
};
