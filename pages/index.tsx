"use client";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { BoxCard } from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-white selection:bg-[#E2FF3B] selection:text-black font-sans scroll-smooth transition-colors duration-500">

      {/* Dynamic Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E2FF3B]/20 dark:bg-[#E2FF3B]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/20 dark:bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row max-w-[1600px] mx-auto">

        {/* LEFT: Identity Sidebar */}
        <aside className="w-full xl:w-1/3 xl:h-screen xl:sticky xl:top-0 p-6 xl:p-12 flex flex-col justify-center">
          <div className="bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-2xl relative group transition-colors">

            {/* Subtle Inner Glow */}
            <div className="absolute -top-24 -right-24 h-48 w-48 bg-[#E2FF3B]/20 dark:bg-[#E2FF3B]/10 blur-3xl rounded-full group-hover:bg-[#E2FF3B]/30 transition-colors" />

            {/* Profile Picture */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#E2FF3B] to-blue-500 rounded-full blur opacity-30 dark:opacity-20 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative h-40 w-40 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-white/10 p-1 bg-white dark:bg-neutral-900">
                <Image
                  src="/images/profile.jpeg"
                  alt="Amit Nemade"
                  fill
                  className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-white">Amit Nemade</h1>
            <p className="text-[#869900] dark:text-[#E2FF3B] font-mono text-xs mb-8 uppercase tracking-[0.2em] font-bold">Frontend Architect</p>

            {/* Info Grid */}
            <div className="space-y-4 w-full text-left text-neutral-500 dark:text-neutral-400 text-sm border-t border-neutral-200 dark:border-white/10 py-8 my-2">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 dark:text-white/30 font-mono text-[10px]">EMAIL</span>
                <span className="text-neutral-800 dark:text-white/90">amitnemade34@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 dark:text-white/30 font-mono text-[10px]">LOCATION</span>
                <span className="text-neutral-800 dark:text-white/90">Pune, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 dark:text-white/30 font-mono text-[10px]">AVAILABILITY</span>
                <span className="text-[#6d7c00] dark:text-[#E2FF3B] flex items-center gap-2 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E2FF3B] animate-pulse shadow-[0_0_8px_#E2FF3B]" />
                  Available
                </span>
              </div>
            </div>

            {/* QR CODE SECTION */}
            <div className="w-full pt-4 pb-2 border-b border-neutral-200 dark:border-white/10 mb-6 group/qr">
              <motion.div
                layoutId="qr-code-box"
                onClick={() => setIsQrOpen(true)}
                className="flex items-center justify-between bg-neutral-100 dark:bg-black/40 rounded-2xl p-4 border border-neutral-200 dark:border-white/5 hover:border-[#E2FF3B]/50 transition-all duration-300 cursor-zoom-in"
              >
                <div className="text-left">
                  <p className="text-[10px] font-mono text-neutral-400 dark:text-white/40 uppercase tracking-tighter">vCard Contact</p>
                  <p className="text-xs text-neutral-700 dark:text-white/80 font-medium">Scan to Save</p>
                </div>
                <motion.div layoutId="qr-image-container" className="bg-[#E2FF3B] p-1.5 rounded-lg shadow-sm">
                  <Image
                    src="/svgs/Amit_QR.svg"
                    width={48}
                    height={48}
                    alt="Contact QR"
                    className="contrast-125 invert"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <Link
              href="/Frontend_Developer_Amit_Nemade.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full group relative overflow-hidden bg-neutral-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                DOWNLOAD CV <span className="text-lg">↓</span>
              </span>
              <div className="absolute inset-0 bg-[#E2FF3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </aside>

        {/* RIGHT: Content */}
        <div className="flex-1 p-6 xl:p-12 space-y-20">
          {/* Hero */}
          <section className="pt-10">
            <h2 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white">
              Crafting <span className="text-neutral-400 dark:text-neutral-500 italic font-light">seamless</span> interfaces that
              <span className="text-neutral-900 dark:text-white"> empower users.</span>
            </h2>
            <p className="mt-8 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Based in India, I specialize in building robust frontend ecosystems using React and Flutter. I focus on high-performance code and accessible design.
            </p>
          </section>

          <section id="work">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-3xl font-bold">Featured Work</h3>
              <div className="h-[1px] flex-1 mx-8 bg-white/10 hidden md:block" />
              <span className="text-neutral-500 font-mono text-sm">/ 06 CASE STUDIES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                projectName="IRCTC Tatkal Helper"
                imageSrc="/images/irctctool.webp"
                href="/projects/irctc-tatkal-extension"
                className="col-span-full !aspect-[16/9] lg:!aspect-[21/9]"
                isFeatured
                description="Chrome extension solving real-world ticket booking friction."
              />
              <ProjectCard
                projectName="Network FP Portal"
                imageSrc="/images/nfp-portal.webp"
                href="/projects/nfp-portal"
                showF22Badge
              />
              <ProjectCard
                projectName="AstroAI"
                imageSrc="/images/nfp-portal.webp"
                href="/projects/astro-ai"
              />
            </div>
          </section>

          {/* Section: Skills Organized */}
          <section>
            <div className="flex justify-between items-center mb-12">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">Expertise</h3>
                <div className="h-[1px] flex-1 mx-8 bg-neutral-200 dark:bg-white/10 hidden md:block" />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-[#869900] dark:text-[#E2FF3B] font-mono text-xs uppercase tracking-widest mb-6">Core Stack</p>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.filter(s => ["ReactJS", "Next.Js", "Flutter", "Typescript", "TailwindCSS"].includes(s.name)).map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#869900] dark:text-[#E2FF3B] font-mono text-xs uppercase tracking-widest mb-6">Backend & Tools</p>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.filter(s => !["ReactJS", "Next.Js", "Flutter", "Typescript", "TailwindCSS"].includes(s.name)).map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Reduced padding from p-20 to p-12, and tightened the max-width */}
          <section className="relative overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-[2.5rem] p-8 lg:p-12 transition-colors shadow-sm">
            {/* Watermark: Scaled down and moved further into the corner */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
              <Image src="/svgs/Amit_QR.svg" width={250} height={250} alt="" className="dark:invert-0 invert" />
            </div>

            <div className="max-w-xl relative z-10">
              {/* Heading: Scaled down from text-5xl to text-3xl for a cleaner look */}
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 italic tracking-tight text-neutral-900 dark:text-white leading-tight">
                Let&apos;s build the <br />
                <span className="text-[#869900] dark:text-[#E2FF3B]">next big thing</span>.
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-base mb-8 leading-relaxed max-w-md">
                I am open to freelance projects and full-time opportunities. Drop a message.
              </p>
              <ContactForm />
            </div>
          </section>
          <footer className="py-10 text-center text-neutral-600 text-sm font-mono">
            © 2026 AMIT NEMADE
          </footer>
        </div>
      </div>

      {/* Hero QR Modal */}
      <AnimatePresence>
        {isQrOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsQrOpen(false)}
              className="absolute inset-0 bg-neutral-900/60 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId="qr-code-box"
              className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center shadow-2xl max-w-sm w-full"
            >
              <button onClick={() => setIsQrOpen(false)} className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">✕</button>
              <motion.div layoutId="qr-image-container" className="bg-[#E2FF3B] p-4 rounded-3xl mb-6 shadow-lg border border-neutral-100">
                <Image src="/svgs/Amit_QR.svg" width={240} height={240} alt="Contact QR" className="contrast-125 invert" />
              </motion.div>
              <div className="text-center">
                <h3 className="text-[#869900] dark:text-[#E2FF3B] font-bold text-2xl mb-2">Connect with Amit</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">Scan this code to instantly save my professional contact details to your phone.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

const SKILLS = [
  { name: "ReactJS", imageSrc: "/images/reactjs.webp" },
  { name: "Next.Js", imageSrc: "/images/nextjs.webp" },
  { name: "Flutter", imageSrc: "/images/flutter.webp", size: 40 },
  { name: "Redux", imageSrc: "/images/redux.webp" },
  { name: "TailwindCSS", imageSrc: "/images/tailwind.webp", labelClasname: "mt-5" },
  { name: "MaterialUI", imageSrc: "/images/materialui.webp" },
  { name: "Ant Design", imageSrc: "/images/antdesign.webp", size: 40 },
  { name: "NodeJs", imageSrc: "/images/nodejs.webp", size: 45 },
  { name: "ExpressJs", imageSrc: "/images/expressjs.webp", size: 45 },
  { name: "MongoDB", imageSrc: "/images/mongodb.webp", size: 45 },
  { name: "Javascript", imageSrc: "/images/javascript.webp", size: 45 },
  { name: "Typescript", imageSrc: "/images/typescript.webp" },
  { name: "Wordpress", imageSrc: "/images/wordpress.webp" },
  { name: "Chrome Extension", imageSrc: "/images/chrome-extension.webp", size: 50 },
];