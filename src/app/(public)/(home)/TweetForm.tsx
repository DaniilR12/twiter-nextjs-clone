import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
  return (
    <>
      <form
        action={postTweet}
        className="border-b border-[var(--border)] p-4 text-[var(--foreground)] space-y-3 bg-[var(--background)]"
      >
        <input
          name="content"
          placeholder="What's happening!?"
          className="w-full bg-transparent outline-none placeholder-[var(--secondary)] text-xl font-bold hover:bg-[var(--hover)] rounded-lg p-2 transition-colors cursor-text"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[var(--primary)] text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-[var(--primary-dark)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
}
