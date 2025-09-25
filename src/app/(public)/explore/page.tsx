import type { Metadata } from "next";
import { Explore } from "./Explore";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  return (
    <div className="text-center">
      <div>
        <Suspense>
          <Explore />
        </Suspense>
      </div>
    </div>
  );
}
