"use client";

import { TweetForm } from "@/app/(public)/(home)/TweetForm";
import { useState } from "react";

export function PostButton() {
  const [active, setActive] = useState("");
  return (
    <>
      <div
        onClick={() => setActive("active")}
        className="ml-40 font-black bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-center text-white h-13 content-center rounded-full w-57 hover:from-[var(--primary-dark)] hover:to-[var(--primary)] hover:cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Post
      </div>
      {active === "active" && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActive("")}
        >
          <div 
            className="p-6 rounded-2xl shadow-2xl max-w-lg w-full bg-[var(--background)] border border-[var(--border)] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-black text-[var(--foreground)]">Compose new post</h2>
              <button
                onClick={() => setActive("")}
                className="text-[var(--secondary)] hover:text-[var(--foreground)] text-2xl transition-colors"
              >
                ✕
              </button>
            </div>
            <TweetForm />
          </div>
        </div>
      )}
    </>
  );
}
