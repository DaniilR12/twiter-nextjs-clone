"use client";

import Image from "next/image";
import Link from "next/link";

export const ProfileInMenu = () => {
  return (
    <Link href="#" className=" ml-40 mt-12 w-[192px] flex gap-3">
      <div className=" w-[45px] h-[45px] rounded-full overflow-hidden shadow-lg">
        <Image
          src="/Lebiga.webp"
          alt="Avatar"
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-tight">
        <span className="block font-bold text-[15px]">D M</span>
        <span className="block text-[15px] text-white/50">@ryazanow50</span>
      </div>
    </Link>
  );
};
