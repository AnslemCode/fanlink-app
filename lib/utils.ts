import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format duration from seconds to MM:SS
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

/**
 * Get social media icon name from URL
 */
export function getSocialPlatform(url: string): string {
  if (!url) return "";

  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("twitter.com") || url.includes("x.com")) return "twitter";
  if (url.includes("facebook.com")) return "facebook";
  if (url.includes("youtube.com")) return "youtube";
  if (url.includes("tiktok.com")) return "tiktok";

  return "link";
}

/**
 * Extract initials from artist name
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
