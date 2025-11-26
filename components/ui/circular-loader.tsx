"use client";

import Image from "next/image";

export const CircularLoader = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Subtle background gradient matching fanlink design */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(166, 41, 40, 0.2) 0%, rgba(31, 31, 31, 0.9) 50%, #0a0a0a 100%)",
        }}
      />

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Loading Illustration */}
        <div className="relative">
          <Image
            src="/loadingillustration.svg"
            alt="Loading"
            width={280}
            height={280}
            className="w-56 h-56 sm:w-70 sm:h-70 object-contain drop-shadow-2xl animate-pulse"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-lg font-medium">Loading</p>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-[#a62928] rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 bg-[#a62928] rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-[#a62928] rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
