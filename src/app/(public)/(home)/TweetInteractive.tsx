"use client";

import { useState } from "react";
import { PAGES } from "@/config/pages.config";
import type { ITweet } from "@/shared/types/tweet.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  tweet: ITweet;
}

export function TweetInteractive({ tweet }: Props) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [retweets, setRetweets] = useState(0);
  const [retweeted, setRetweeted] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikes((prev) => Math.max(0, prev - 1));
      setLiked(false);
    }
  };

  const handleRetweet = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!retweeted) {
      setRetweets((prev) => prev + 1);
      setRetweeted(true);
    } else {
      setRetweets((prev) => Math.max(0, prev - 1));
      setRetweeted(false);
    }
  };

  return (
    <div className="group border-b border-[var(--border)] p-4 hover:bg-[var(--hover)] cursor-pointer transition-colors duration-200 animate-fade-in">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
          <Image
            src="/x-social-media-white-icon.png"
            alt="logo"
            width={24}
            height={24}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <Link
              href={PAGES.PROFILE(tweet.author)}
              className="font-bold text-[var(--foreground)] hover:underline"
            >
              @{tweet.author}
            </Link>
            <span className="text-[var(--secondary)] text-sm">•</span>
            <span className="text-[var(--secondary)] text-sm hover:underline">
              2h
            </span>
          </div>

          {/* Tweet text */}
          <p className="text-[var(--foreground)] text-base mb-3 leading-normal break-words">
            {tweet.text}
          </p>

          {/* Interaction buttons */}
          <div className="flex justify-between text-[var(--secondary)] max-w-md text-sm mb-2">
            {/* Reply */}
            <button className="group/btn flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
              <div className="group-hover/btn:bg-blue-500/10 rounded-full p-2 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l-6 6"
                  />
                </svg>
              </div>
              <span className="text-xs">0</span>
            </button>

            {/* Retweet */}
            <button
              onClick={handleRetweet}
              className={`group/btn flex items-center gap-2 transition-colors ${
                retweeted
                  ? "text-green-500 hover:text-green-600"
                  : "hover:text-green-500"
              }`}
            >
              <div
                className={`rounded-full p-2 transition-colors ${
                  retweeted ? "bg-green-500/10" : "group-hover/btn:bg-green-500/10"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.75 3.5a.75.75 0 00-.75.75v10.5a.75.75 0 001.5 0V5h9.25a.75.75 0 000-1.5H4.75zM19.75 8a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V10h-9.25a.75.75 0 010-1.5h9.25V8.75a.75.75 0 01.75-.75z" />
                </svg>
              </div>
              <span className="text-xs">{retweets}</span>
            </button>

            {/* Like */}
            <button
              onClick={handleLike}
              className={`group/btn flex items-center gap-2 transition-colors ${
                liked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }`}
            >
              <div
                className={`rounded-full p-2 transition-colors ${
                  liked ? "bg-red-500/10" : "group-hover/btn:bg-red-500/10"
                }`}
              >
                <svg
                  className={`w-4 h-4 ${liked ? "animate-pulse-like" : ""}`}
                  fill={liked ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xs">{likes}</span>
            </button>

            {/* Share */}
            <button className="group/btn flex items-center gap-2 hover:text-[var(--primary)] transition-colors">
              <div className="group-hover/btn:bg-blue-500/10 rounded-full p-2 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
