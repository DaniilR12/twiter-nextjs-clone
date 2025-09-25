"use client";

import { TweetForm } from "@/app/(public)/(home)/TweetForm";
import { useState } from "react";

export function PostButton() {
  const [active, setActive] = useState("");
  return (
    <>
      <div
        onClick={() => setActive("active")}
        className="ml-40 font-bold bg-white text-center text-black h-13 content-center rounded-full w-57 hover:bg-white/90 hover:cursor-pointer transition-colors duration-300"
      >
        Post
      </div>
      {active === "active" && (
        <div className="fixed inset-0 bg-blue-300/50 flex items-center justify-center z-50 ">
          <div className=" p-6 rounded-2xl shadow-xl max-w-lg w-full">
            <TweetForm />
          </div>
        </div>
      )}
    </>
  );
}
