import { PAGES } from "@/config/pages.config";
import type { ITweet } from "@/shared/types/tweet.interface";
import Image from "next/image";
import Link from "next/link";
interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <>
      <div className="border border-white/20 p-4  bg-black">
        <div className="flex items-center gap-3 mb-2 ml-2">
          <Image
            src="/x-social-media-white-icon.png"
            alt="logo"
            width={25}
            height={25}
          />
          <Link href={PAGES.PROFILE(tweet.author)} className="font-semibold">@{tweet.author}</Link>
        </div>
        <p className="text-white/90 ml-4">{tweet.text}</p>
      </div>
    </>
  );
}
