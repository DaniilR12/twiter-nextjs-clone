import Image from "next/image";
import { TweetInteractive } from "./TweetInteractive";
import { TWEETS } from "@/shared/data/tweets.data";
import { TweetForm } from "./TweetForm";
import Link from "next/link";
import { Search } from "./Search";
import { Premium } from "./Premium";
import { HeaderButtons } from "./HeaderButtons";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center border-l border-l-[var(--border)]">
        <div className="w-full max-w-150">
          <div className="border-b border-r border-[var(--border)] top-0 flex w-150 fixed items-center content-center h-14 z-10 bg-[var(--background)]/80 backdrop-blur">
            <HeaderButtons/>
          </div>
          <div className="pt-14">
            <TweetForm />
          </div>
          <div>
            {TWEETS.map((val, index) => {
              return <TweetInteractive key={index} tweet={val} />;
            })}
          </div>
        </div>
        <div className="pl-7 pt-1">
          <Search />
          <div className="pt-15">
            <Premium />
          </div>
        </div>
      </div>
    </>
  );
}
