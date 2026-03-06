"use client";
import Link from "next/link";
import { useState } from "react";

export function HeaderButtons() {
  const [active, setActive] = useState("For you");
  return (
    <>
      <Link
        href="#"
        onClick={() => setActive("For you")}
        className={`flex flex-1 justify-center backdrop-blur-md bg-[var(--background)]/70 items-center content-center transition-all duration-200 hover:bg-[var(--hover)] h-full relative group ${
          active === "For you"
            ? "after:content-[''] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[4px] after:bg-gradient-to-r after:from-[var(--primary)] after:to-[var(--accent)] after:rounded-t after:transition-all after:duration-300"
            : ""
        }`}
      >
        <span className={`font-semibold text-[15px] ${active === "For you" ? "text-[var(--foreground)]" : "text-[var(--secondary)] group-hover:text-[var(--foreground)]"}`}>
          For you
        </span>
      </Link>
      <Link
        href="#"
        onClick={() => setActive("Following")}
        className={`flex flex-1 h-full items-center backdrop-blur-md bg-[var(--background)]/70 justify-center content-center transition-all duration-200 hover:bg-[var(--hover)] relative group ${
          active === "Following"
            ? "after:content-[''] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[4px] after:bg-gradient-to-r after:from-[var(--primary)] after:to-[var(--accent)] after:rounded-t after:transition-all after:duration-300"
            : ""
        }`}
      >
        <span className={`font-semibold text-[15px] ${active === "Following" ? "text-[var(--foreground)]" : "text-[var(--secondary)] group-hover:text-[var(--foreground)]"}`}>
          Following
        </span>
      </Link>
    </>
  );
}
