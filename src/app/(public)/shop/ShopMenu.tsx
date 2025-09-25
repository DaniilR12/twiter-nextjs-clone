'use client'
import { MenuItem } from "@/components/MenuItem";
import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";

export function ShopMenu() {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-4 text-2xl items-center mb-5 ">
        <MenuItem
          menuItem={{
            href: PAGES.SHOP,
            name: "SSR",
          }}
          isActive={pathname === PAGES.SHOP}
        />
        <MenuItem
          menuItem={{
            href: PAGES.ISR,
            name: "ISR",
          }}
          isActive={pathname === PAGES.ISR}
        />
        <MenuItem
          menuItem={{
            href: PAGES.SSG,
            name: "SSG",
          }}
          isActive={pathname === PAGES.SSG}
        />
      </nav>
    </>
  );
}
