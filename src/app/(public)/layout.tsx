import { Header } from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <Header />
      <div className="ml-121 w-full">
        {children}
      </div>
    </div>
  );
}
