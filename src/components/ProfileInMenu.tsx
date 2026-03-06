"use client";

import Image from "next/image";
import Link from "next/link";

export const ProfileInMenu = () => {
  return (
    <Link href="#" className="ml-40 mt-12 w-[192px] flex gap-3 hover:bg-[var(--hover)] p-3 rounded-full transition-all duration-200 group">
      <div className="w-[45px] h-[45px] rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] group-hover:scale-110 transition-transform">
        <Image
          src="/Lebiga.webp"
          alt="Avatar"
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-tight">
        <span className="block font-bold text-[15px] text-[var(--foreground)]">D M</span>
        <span className="block text-[14px] text-[var(--secondary)]">@ryazanow50</span>
      </div>
    </Link>
  );
};
