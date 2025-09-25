import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="border-r border-white/20 p-0">
      <div className="py-3.5 pl-7 flex flex-col items-center gap-3 bg-black w-121 fixed h-full ml-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/x-social-media-white-icon.png"
            alt="Logo"
            width={27}
            height={27}
            priority
          />
        </Link>

        <Menu />
      </div>
    </header>
  );
}
