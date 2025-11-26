"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to 404 since there's no slug
    router.push("/404");
  }, [router]);

  // Show minimal loader during redirect
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-800" />
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin"
          style={{ animationDuration: "1s" }}
        />
      </div>
    </div>
  );
}
