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
        className={`flex flex-1 justify-center backdrop-blur-md bg-black/70 items-center content-center transition-colors duration-200 hover:bg-white/8 h-full ${
          active === "For you"
            ? "after:content-[''] font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-blue-400 after:rounded-t after:transition-all after:duration-300"
            : ""
        }`}
      >
        For you
      </Link>
      <Link
        href="#"
        onClick={() => setActive("Following")}
        className={`flex flex-1 h-full items-center  backdrop-blur-md bg-black/70 justify-center content-center transition-colors duration-200 hover:bg-white/8 ${
          active === "Following"
            ? "after:content-['']  font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-blue-400 after:rounded-t after:transition-all after:duration-300"
            : ""
        }`}
      >
        Following
      </Link>
    </>
  );
}
