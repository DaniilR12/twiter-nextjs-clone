'use client'
import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileFake() {
    const router = useRouter()
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold mb-6">Profile fake</h1>
      <button className="transition-all ease-in-out duration-300 hover:cursor-pointer hover:font-bold" onClick={() => router.push(PAGES.HOME)}>Go to home</button>
    </div>
  );
}
