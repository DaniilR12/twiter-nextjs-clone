import Link from "next/link";

export function Premium() {
    return <>
    <div className="flex flex-col items-start content-center w-90 h-40 border border-white/20 rounded-xl pl-5 pt-2 pb-2  gap-2">
        <h1 className="font-extrabold text-xl">Subscribe to Premium</h1>
        <span className="text-[15px]">Subscribe to unlock new features and if eligible, receive a share of revenue.</span>
        <Link className="w-30 h-10 text-[15px] text-center font-extrabold content-center bg-[#1d9bf0] rounded-full " href='#'>Subscribe</Link>
    </div>
    </>
}
