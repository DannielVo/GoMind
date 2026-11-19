import Link from "next/link";

import MaterialIcon from "@/components/common/MaterialIcon";

const motifLines = [20, 60, 100, 140, 180];

export default function GuideCTA() {
  return (
    <section
      aria-labelledby="guide-cta-heading"
      className="relative isolate overflow-hidden rounded-2xl border border-border bg-primary-light p-6 shadow-sm sm:p-10"
    >
      <div className="relative z-10 max-w-xl">
        <p className="mb-2 text-xs font-bold tracking-wider text-primary-hover uppercase">
          Practice Makes Mastery
        </p>

        <h2
          id="guide-cta-heading"
          className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl"
        >
          Ready to Play Your First Game?
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-text-secondary sm:text-base">
          You now know the foundations: liberties, captures, territory, and
          corners. Take the next step and explore the game setup.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/setup"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary-hover px-8 py-3 text-base font-bold text-text-inverse shadow-md transition-colors hover:bg-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover"
          >
            Start Playing
            <MaterialIcon name="arrow_forward" size={20} />
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-surface px-6 py-3 text-base font-semibold text-text-primary shadow-sm transition-colors hover:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 text-primary opacity-15"
      >
        {motifLines.map((position) => (
          <g key={position}>
            <line x1="20" y1={position} x2="180" y2={position} />
            <line x1={position} y1="20" x2={position} y2="180" />
          </g>
        ))}

        <circle cx="100" cy="100" r="6" fill="currentColor" stroke="none" />
      </svg>
    </section>
  );
}
