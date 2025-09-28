"use client";

import React from "react";
import TypeWriter from "./TypeWriter";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const AI_SERVICES = [
    { title: "AI Image", path: "/text-to-image" },
    // { title: "Image Edit", path: "/image-to-image" },
  ];

  const NAV_LINKS = [
    { title: "Home", path: "/" },
    { title: "About-Us", path: "/about-us" },
    { title: "Policy", path: "/policy" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-center flex-col mt-4 z-50 merriweather-font">
      {/* Top nav */}
      <div
        className="flex gap-5 px-5 py-2 rounded-full
                    backdrop-blur-md bg-white/10 border border-white/20 
                    shadow-sm text-[#2a2a2a] text-shadow-2xs text-[14px] font-medium"
      >
        {NAV_LINKS.map((item, key) => {
          return (
            <Link href={item.path} key={key}>
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* Typewriter text */}
      <TypeWriter />

      {/* AI Service links */}
      <section className="w-[70%] max-sm:w-[95%] mb-5">
        <h3>Select AI :</h3>
        <div className="flex gap-2 mt-4">
          {AI_SERVICES.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-full px-3 py-1 border shadow-sm text-[14px] font-medium transition
                  ${
                    isActive
                      ? "bg-[#2a2a2a] text-white border-[#2a2a2a]"
                      : "backdrop-blur-md bg-white/10 text-[#2a2a2a] border-white/20"
                  }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </section>
    </header>
  );
};

export default Header;
