import type { Metadata } from "next";
import { Profile } from "./Profile";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <>
      <div className="text-center">
        <Profile />
      </div>
    </>
  );
}
