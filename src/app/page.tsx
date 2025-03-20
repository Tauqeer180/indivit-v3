import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="tw-flex tw-gap-4 tw-items-center tw-flex-col sm:tw-flex-row tw-my-10">
          <Link
            className="tw-rounded-full tw-border tw-border-solid tw-border-black/[.08] dark:tw-border-white/[.145] tw-transition-colors tw-flex tw-items-center tw-justify-center hover:tw-bg-[#f2f2f2] dark:hover:tw-bg-[#1a1a1a] hover:tw-border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/ernaehrung-fuer-gesundes-leben-gesund-essen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Blogs
          </Link>
        </div>
      </main>
    </div>
  );
}
