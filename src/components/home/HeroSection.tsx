import Link from "next/link";

import MaterialIcon from "@/components/common/MaterialIcon";
import BoardPreview from "@/components/home/BoardPreview";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="home-heading"
      className="relative isolate overflow-hidden bg-bg-primary"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 -z-10 h-[560px] w-[560px] rounded-full bg-primary-light/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-24 -z-10 h-[480px] w-[480px] rounded-full bg-board/20 blur-3xl"
      />

      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary-hover uppercase shadow-sm sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-primary"
              />
              <span>9×9 Go • Play vs AI</span>
            </div>

            <h1
              id="home-heading"
              className="mt-6 text-4xl leading-[1.12] font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Think. Play. <br className="hidden sm:inline" />
              <span className="text-last-move">Master Go.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
              Challenge your mind with GoMind AI. Enjoy the timeless strategy of
              Go in a simple, relaxing experience tuned for clarity and
              contemplative focus.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/setup"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[10px] bg-primary-hover px-7 py-3.5 text-sm font-semibold text-text-inverse shadow-md transition-colors hover:bg-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover"
              >
                Start Playing
                <MaterialIcon name="arrow_forward" size={20} />
              </Link>

              <Link
                href="/guide"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-primary-light px-6 py-3.5 text-sm font-semibold text-primary-hover shadow-sm transition-colors hover:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover"
              >
                <MaterialIcon name="auto_stories" size={20} />
                Learn How to Play
              </Link>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
              <MaterialIcon
                name="spa"
                size={18}
                className="mt-0.5 text-success"
              />
              <span>
                Casual strategy • No signup required • Instant AI play
              </span>
            </p>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <BoardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
