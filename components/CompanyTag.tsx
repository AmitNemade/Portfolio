import React from "react";

const CompanyTag = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl group/tag transition-all duration-300 hover:border-[#E2FF3B]/50 hover:bg-white/10">
      {/* Small Animated Dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2FF3B] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2FF3B]"></span>
      </span>
      
      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/70 group-hover/tag:text-white transition-colors">
        Built at <span className="text-white">F22 Labs</span>
      </span>

      {/* Subtle Divider */}
      <div className="h-3 w-[1px] bg-white/20 mx-1" />

      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-[#E2FF3B] opacity-50 group-hover/tag:opacity-100 transition-opacity"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
  );
};

export default CompanyTag;