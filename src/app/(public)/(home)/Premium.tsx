import Link from "next/link";

export function Premium() {
    return <>
    <div className="flex flex-col items-start content-center w-90 rounded-2xl pl-6 pt-5 pb-5 gap-4 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 border border-[var(--primary)]/30 hover:border-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-xl">
        <div>
            <h1 className="font-black text-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Premium+ Subscribe</h1>
            <span className="text-[14px] text-[var(--secondary)] leading-relaxed mt-2 block">Unlock exclusive features, ad-free browsing, and get verified. Join millions of premium members.</span>
        </div>
        <Link className="px-6 py-2.5 text-[14px] font-black content-center bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:from-[var(--primary-dark)] hover:to-[var(--primary)] rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-white" href='#'>Subscribe Now →</Link>
    </div>
    </>
}
