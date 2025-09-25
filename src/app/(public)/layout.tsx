import { Header } from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex">
      <Header />
      <div className=" ml-121">
        {children}
      </div>
      
    </div>
  );
}
