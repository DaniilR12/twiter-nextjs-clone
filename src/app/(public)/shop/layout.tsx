import type { PropsWithChildren } from "react";
import { ShopMenu } from "./ShopMenu";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-3 ml-3 w-full">
        <h1 className="mb-6 text-3xl font-bold ">Shop</h1>
        <ShopMenu/>
        <div>{children}</div>
      </div>
    </>
  );
}
