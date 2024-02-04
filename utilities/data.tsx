export type Project = {
  name: string;
  bannerImage: string;
  description: string;
  skills: Skill[];
  tags: string[];
  important_note?: string;
  livePreviewLink?: Preview[];
};
export type AllProject = { [key: string]: Project };

export type Skill = {
  name: string;
  iconSrc: string;
  labelClasname?: string;
  size?: number;
};
export type Preview = {
  name?: string;
  link: string;
  notAvailable?: Boolean;
};

export const data: AllProject = {
  "nfp-portal": {
    name: "Network FP Member Learning Portal",
    bannerImage: "/images/nfp-portal.webp",
    description:
      "Network FP is India&apos;s Leading Online Knowledge Platform for Financial Advisors. Network FP&apos;s various programs and events are designed to help financial advisors build and grow their practice/career with a 'Client First' approach.",
    skills: [
      { name: "ReactJS", iconSrc: "/images/reactjs.webp" },
      {
        name: "TailwindCSS",
        iconSrc: "/images/tailwind.webp",
        labelClasname: "mt-3",
      },
      { name: "Zoom integration", iconSrc: "/images/zoom.webp", size: 40 },
    ],
    tags: [
      "Frontend",
      "ReactJS",
      "TailwindCSS",
      "State Management",
      "API Integration",
      "Zoom integration",
      "Performance optimisation",
    ],
    important_note:
      "NetworkFP is a client of F22 Labs Global Pvt. Ltd. And I worked on this project as a employee of F22 Labs",
    livePreviewLink: [{ link: "https://learn.networkfp.com/" }],
  },
  "nfp-members-directory": {
    name: "Network FP Member Directory",
    bannerImage: "/images/nfp-portal.webp",
    description:
      "Find professionals & experts who can help you & your family with financial wellbeing, investments, insurance, wealth management, financial goals & all personal finance products and solutions.",
    skills: [
      { name: "Next.JS", iconSrc: "/images/nextjs.webp" },
      {
        name: "TailwindCSS",
        iconSrc: "/images/tailwind.webp",
      },
    ],
    tags: [
      "Frontend",
      "Next.JS",
      "TailwindCSS",
      "State Management",
      "Server Side Rendering",
      "API Integration",
      "SEO optimization",
      "Google indexing",
    ],
    important_note:
      "NetworkFP is a client of F22 Labs Global Pvt. Ltd. And I worked on this project as a employee of F22 Labs",
    livePreviewLink: [{ link: "https://members.networkfp.com/" }],
  },
  "nfp-partners-directory": {
    name: "Network FP Partners Directory",
    bannerImage: "/images/nfp-portal.webp",
    description: `Search, Connect and Grow with financial advisory and distribution solution providers, technology platforms, software vendors, financial product manufacturers and more.`,
    skills: [
      { name: "Next.JS", iconSrc: "/images/nextjs.webp" },
      {
        name: "TailwindCSS",
        iconSrc: "/images/tailwind.webp",
      },
    ],
    tags: [
      "Frontend",
      "Next.JS",
      "TailwindCSS",
      "State Management",
      "Server Side Rendering",
      "API Integration",
      "SEO optimization",
      "Google indexing",
    ],
    important_note:
      "NetworkFP is a client of F22 Labs Global Pvt. Ltd. And I worked on this project as a employee of F22 Labs",
    livePreviewLink: [{ link: "https://partners.networkfp.com/" }],
  },
  "nfp-app": {
    name: "Network FP App",
    bannerImage: "/images/nfp-portal.webp",
    description: `Network FP is India&apos;s Leading Online Knowledge Platform for
    Financial Advisors. Network FP&apos;s various programs and events
    are designed to help financial advisors build and grow their
    practice/career with a "Client First" approach.`,
    skills: [
      { name: "Flutter", iconSrc: "/images/flutter.webp", size: 35 },
      { name: "Zoom integration", iconSrc: "/images/zoom.webp", size: 40 },
      { name: "Flutter Provider", iconSrc: "/images/flutter.webp", size: 35 },
    ],
    tags: [
      "Frontend",
      "Flutter",
      "Dart",
      "State Management",
      "API Integration",
      "Zoom integration",
      "Flutter Provider",
    ],
    important_note:
      "NetworkFP is a client of F22 Labs Global Pvt. Ltd. And I worked on this project as a employee of F22 Labs",
    livePreviewLink: [
      { name: "Preview will be available soon", link: "", notAvailable: true },
    ],
  },
  compatibility: {
    name: "Mentor Connect App",
    bannerImage: "/images/compatibility.webp",
    description: `Mentor Connect is a mobile application designed to support professional and/or academic and personal growth. Mentors and Mentees work together to identify, track and achieve goals. Scheduling meetings and communication within the platform makes it easy for mentors and mentees to meet virtually or in-person to achieve success`,
    skills: [
      { name: "Flutter", iconSrc: "/images/flutter.webp", size: 40 },
      { name: "Google oAuth", iconSrc: "/images/google.webp" },
      { name: "Outlook oAuth", iconSrc: "/images/outlook.webp" },
    ],
    tags: [
      "Frontend",
      "Flutter",
      "Dart",
      "State Management",
      "API Integration",
      "Google oAuth integration",
      "Microsoft oAuth integration",
    ],
    important_note:
      "Compatibility is a client of F22 Labs Global Pvt. Ltd. And I worked on this project as a employee of F22 Labs",
    livePreviewLink: [
      {
        name: "Google Playstore",
        link: "https://play.google.com/store/apps/details?id=com.compatibility.mentorconnect&hl=en&gl=US",
      },
      {
        name: "Apple Appstore",
        link: "https://apps.apple.com/in/app/mentor-connect-compatibility/id1598526848",
      },
    ],
  },
  "astro-ai": {
    name: "AstroAI: ChatGPT Based Astrology Prediction",
    bannerImage: "/images/astroai",
    description: `Embark on a cosmic journey with AstroAI, a cutting-edge astrology prediction web app powered by ChatGPT and built on the MERN stack. Seamlessly blending modern technology with ancient wisdom, AstroAI delivers personalized astrological insights, creating a unique and engaging experience for users seeking celestial guidance in the digital age.`,
    skills: [
      { name: "NodeJS", iconSrc: "/images/nodejs.webp", size: 45 },
      { name: "ExpressJS", iconSrc: "/images/expressjs.webp" },
      { name: "MongoDB", iconSrc: "/images/mongodb.webp" },
      { name: "ReactJS", iconSrc: "/images/reactjs.webp" },
      {
        name: "TailwindCSS",
        iconSrc: "/images/tailwind.webp",
        labelClasname: "mt-5",
      },
    ],
    tags: [
      "Frontend",
      "Backend",
      "Fullstack",
      "CRED",
      "MongoDB",
      "Rest API",
      "JWT Token",
      "API Integration",
    ],
    important_note:
      "This is a personal project created to learn backend development in MERN stack.",
    livePreviewLink: [
      {
        link: "https://astro-ai.vercel.app/",
      },
    ],
  },
  "irctc-tatkal-extension": {
    name: "IRCTC Tatkal Automation Tool",
    bannerImage: "/images/irctctool.webp",
    description:
      "IRCTC Tatkal Automation Tool will help you book IRCTC Tatkal tickets at an ease. The tool will autofill all your journey data and will work seamlessly with new IRCTC website. Pre-fill all your data in extension and the extension will fill the data and automatically submit the data. User only needs to fill captcha and any uncertain popups which may come during booking.",
    skills: [
      {
        name: "Chrome Extension",
        iconSrc: "/images/chrome-extension.webp",
        size: 45,
      },
      { name: "Javascript", iconSrc: "/images/javascript.webp", size: 40 },
    ],
    tags: ["Chrome Extension", "Chrome API", "Javascript"],
    important_note:
      "During its peak season, this tool achieved a maximum of 660,000 weekly users, and it currently maintains an average of 200,000 users per week.",
    livePreviewLink: [
      {
        name: "Download from Chrome Store",
        link: "https://chrome.google.com/webstore/detail/irctc-tatkal-automation-t/cddilnjpngoldpdhfiibcjenaphclbik",
      },
    ],
  },
};
