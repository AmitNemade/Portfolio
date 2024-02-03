import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

const AppSkeleton = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(prefersDarkMode);
        }
      });
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="myAppContainer" className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Amit Nemade - Web Developer | ReactJS | NextJS | Flutter</title>
        <meta
          name="description"
          content="Passionate web developer showcasing innovative projects. Specializing in creating responsive and visually appealing websites. Let's bring your ideas to life!"
        />
        <link rel="canonical" href="https://amitnemade.vercel.app/" />
        <meta
          property="og:title"
          content="Amit Nemade - Web Developer | ReactJS | NextJS | Flutter | NodeJS"
        />
        <meta
          property="og:description"
          content="Passionate web developer showcasing innovative projects. Specializing in creating responsive and visually appealing websites. Let's bring your ideas to life!"
        />
        <meta
          property="og:image"
          content="https://amitnemade.vercel.app/images/profile_picture.jpg"
        />
        <meta property="og:url" content="https://amitnemade.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:site"
          content="https://amitnemade.vercel.app/"
        />
        <meta
          property="twitter:image"
          content="https://amitnemade.vercel.app/images/portfolio_preview.png"
        />
        <meta
          property="twitter:title"
          content="Amit Nemade - Web Developer | ReactJS | NextJS | Flutter | NodeJS"
        />
        <meta
          property="twitter:description"
          content="Passionate web developer showcasing innovative projects. Specializing in creating responsive and visually appealing websites. Let's bring your ideas to life!"
        />
        <meta
          property="twitter:site"
          content="https://amitnemade.vercel.app/"
        />
      </Head>
      {children}
      <div className="flex gap-3 fixed bottom-6 lg:left-16 left-6">
        <Link
          href="/Resume_Amit _Resume.pdf"
          target="_blank"
          className={classNames(
            "bg-black dark:bg-white flex items-center gap-2 dark:text-black rounded-full p-2 text-sm text-white",
            isDarkMode ? "animate-glowDark" : "animate-glow"
          )}
        >
          <Image
            src={isDarkMode ? "/svgs/fileDark.svg" : "/svgs/file.svg"}
            width={20}
            height={20}
            className="min-w-[20px]"
            alt="Click to open resume"
            title="View resume"
          />
          Resume
        </Link>
        <div
          className={classNames(
            "border dark:border-neutral-50/20 p-2 gap-3 transition-all group flex items-center cursor-pointer border-neutral-500 justify-start text-black overflow-clip dark:text-white min-w-[36px] max-w-[36px] hover:max-w-full h-9  rounded-full"
          )}
          onClick={toggleDarkMode}
        >
          <Image
            src={isDarkMode ? "/svgs/sun.svg" : "/svgs/moon.svg"}
            width={20}
            height={20}
            className="min-w-[20px]"
            alt={isDarkMode ? "Enable light mode" : "Enable dark mode"}
            title="Change theme"
          />
          <div className="w-full pr-2 text-sm">Change theme</div>
        </div>
      </div>
    </div>
  );
};

export default AppSkeleton;
