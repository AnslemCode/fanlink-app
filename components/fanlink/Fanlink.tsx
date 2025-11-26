"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { SocialLink, StreamingService } from "@/types";
import { SongHeader } from "./SongHeader";
import { StreamingServices } from "./StreamingLinks";
import { Footer } from "./Footer";

const streamingServices: StreamingService[] = [
  {
    name: "Spotify",
    subtitle: "Listen Now",
    icon: "/spotify.png",
    url: "https://open.spotify.com/track/your-track-id",
  },
  {
    name: "Apple Music",
    subtitle: "Listen Now",
    icon: "/apple-music.svg",
    url: "https://music.apple.com/us/album/your-album-id",
  },
  {
    name: "Boomplay",
    subtitle: "Listen Now",
    icon: "/boomplay.png",
    url: "https://www.boomplay.com/songs/your-song-id",
  },
  {
    name: "YouTube Music",
    subtitle: "Listen Now",
    icon: "/youtube-music.png",
    url: "https://music.youtube.com/watch?v=your-video-id",
  },
  {
    name: "Tidal",
    subtitle: "Listen Now",
    icon: "/tidal.png",
    url: "https://tidal.com/browse/track/your-track-id",
  },
  {
    name: "Deezer",
    subtitle: "Listen Now",
    icon: "/deezer.png",
    url: "https://www.deezer.com/track/your-track-id",
  },
  {
    name: "Amazon Music",
    subtitle: "Listen Now",
    icon: "/amazon-music.svg",
    url: "https://music.amazon.com/albums/your-album-id",
  },
  {
    name: "Resso",
    subtitle: "Listen Now",
    icon: "/resso.png",
    url: "https://m.resso.com/song/your-song-id",
  },
  {
    name: "Audiomack",
    subtitle: "Listen Now",
    icon: "/audiomack.png",
    url: "https://audiomack/song/your-song-id",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/heisrema",
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@heisrema",
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/heisrema",
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/heisrema",
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export const FanLink = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      {/* Background Layer - Full Width, Responsive */}
      <div className="fixed inset-0 w-full h-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
            quality={90}
          />
        </div>

        {/* Gradient Overlay - Creates the fade effect from red to dark */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(166, 41, 40, 0.3) 0%, rgba(31, 31, 31, 0.7) 40%, #1F1F1F 70%)",
          }}
        />
      </div>

      {/* Main Content - Sits on top with proper z-index */}
      <main className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 py-8 sm:py-12 md:py-16 mx-auto max-w-[95%] sm:max-w-[600px] min-h-screen">
        {/* Song artwork, title, artist, and audio player */}
        <SongHeader
          title="Fun"
          artist="Rema"
          coverImage="/background.png"
          audioSnippetUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />

        {/* List of streaming platform links */}
        <StreamingServices services={streamingServices} />

        {/* Social media links and artist attribution */}
        <Footer artistName="Rema" socialLinks={socialLinks} />
      </main>
    </div>
  );
};
