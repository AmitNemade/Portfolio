"use client";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

const AppSkeleton = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark for the new aesthetic

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div id="myAppContainer" className={classNames("min-h-screen transition-colors duration-500", isDarkMode ? "dark bg-[#050505]" : "bg-neutral-50")}>
      <Head>
        <title>Amit Nemade | Frontend Architect</title>
        <meta name="description" content="Frontend Developer specializing in ReactJS, NextJS, and Flutter." />
        {/* ... other meta tags remains same ... */}
      </Head>

      {children}

      {/* FIXED NAVIGATION BAR - High-End Floating Dock */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 p-2 bg-black/20 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all hover:scale-105">

        {/* Resume Button */}
        <Link
          href="/Frontend_Developer_Amit_Nemade.pdf"
          target="_blank"
          className="flex items-center gap-2 px-6 py-2.5 bg-[#E2FF3B] text-black rounded-2xl font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(226,255,59,0.4)] active:scale-95"
        >
          <Image
            src="/svgs/file.svg" // Use a consistent dark icon for the lime background
            width={18}
            height={18}
            alt="Resume"
          />
          RESUME
        </Link>

        <div className="h-6 w-[1px] bg-white/10 mx-1" />

        {/* Dynamic Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative flex items-center justify-center h-11 w-11 rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-[#E2FF3B] hover:text-black group"
          aria-label="Toggle Theme"
        >
          <div className="relative h-5 w-5">
            <Image
              src="/svgs/sun.svg"
              fill
              className={classNames("transition-all duration-500", isDarkMode ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100 invert")}
              alt="Light Mode"
            />
            <Image
              src="/svgs/moon.svg"
              fill
              className={classNames("transition-all duration-500 absolute top-0", isDarkMode ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0")}
              alt="Dark Mode"
            />
          </div>

          {/* Tooltip */}
          <span className="absolute bottom-full mb-4 px-3 py-1 bg-black text-white text-[10px] font-mono rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            {isDarkMode ? "LIGHT_MODE" : "DARK_MODE"}
          </span>
        </button>

        {/* Back to Top Icon (Optional addition for UX) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center h-11 w-11 rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white hover:text-black"
        >
          <span className="text-lg">↑</span>
        </button>
      </nav>

      {/* Visual Grain/Noise Overlay for high-end feel */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AppSkeleton;