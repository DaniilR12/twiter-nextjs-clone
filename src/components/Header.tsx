import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="border-r border-[var(--border)] p-0">
      <div className="py-3.5 pl-7 flex flex-col items-center gap-3 bg-[var(--background)] w-121 fixed h-full ml-0">
        <Link href="/" className="flex items-center gap-3 hover:scale-110 transition-transform duration-200">
          <div className="p-2 rounded-full hover:bg-[var(--primary)]/10 transition-colors">
            <Image
              src="/x-social-media-white-icon.png"
              alt="Logo"
              width={27}
              height={27}
              priority
            />
          </div>
        </Link>

        <Menu />
      </div>
    </header>
  );
}
