import Link from "next/link";

import MaterialIcon from "@/components/common/MaterialIcon";

const motifPositions = [10, 35, 60, 85];

export default function HomeCTASection() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="bg-bg-primary px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="relative isolate flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-primary-light p-6 shadow-sm sm:p-8 md:p-12 lg:flex-row">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute -right-12 -bottom-12 -z-10 h-48 w-48 text-text-primary opacity-10"
          >
            {motifPositions.map((position) => (
              <g key={position}>
                <line x1="10" y1={position} x2="90" y2={position} />
                <line x1={position} y1="10" x2={position} y2="90" />
              </g>
            ))}
          </svg>

          <div className="min-w-0 max-w-lg text-center lg:text-left">
            <p className="mb-2 text-xs font-semibold tracking-wider text-primary-hover uppercase">
              Begin Today
            </p>

            <h2
              id="home-cta-heading"
              className="mb-3 text-2xl font-bold text-text-primary md:text-3xl"
            >
              Ready for your first game?
            </h2>

            <p className="text-sm leading-relaxed text-text-secondary">
              Take your seat at the board. Select your stone color, adjust AI
              difficulty, and immerse yourself in pure strategic harmony.
            </p>
          </div>

          <Link
            href="/setup"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[10px] bg-primary-hover px-6 py-4 text-sm font-semibold text-text-inverse shadow-md transition-colors hover:bg-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover sm:w-auto sm:px-8 lg:shrink-0"
          >
            Play vs AI Now
            <MaterialIcon name="sports_esports" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
