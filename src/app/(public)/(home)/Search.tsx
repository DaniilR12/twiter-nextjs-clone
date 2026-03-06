export function Search() {
  return (
    <>
      <div className="bg-[var(--hover)] flex items-center w-90 fixed border border-[var(--border)] rounded-full pl-5 h-11 gap-2 hover:border-[var(--primary)] hover:bg-[var(--background)] transition-all duration-200 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          className="bi bi-search justify-center content-center items-center text-[var(--secondary)]"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          className="outline-none bg-transparent text-[var(--foreground)] placeholder-[var(--secondary)]"
          type="text"
          alt="Search"
          placeholder="Search X"
        />
      </div>
    </>
  );
}
