import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
  return (
    <>
      <form
        action={postTweet}
        className="border border-white/20 p-4 text-white space-y-3"
      >
        <input
          name="content"
          placeholder="What`s happened?"
          className="w-full  bg-transparent outline-none placeholder-gray-500"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
}
