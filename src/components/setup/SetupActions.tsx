import Link from "next/link";
import MaterialIcon from "@/components/common/MaterialIcon";

export default function SetupActions() {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-end">
      <nav
        aria-label="Game setup actions"
        className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:items-center"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 min-w-0 items-center justify-center rounded-xl border border-border bg-bg-secondary px-3 py-2 text-center text-sm font-semibold text-text-primary transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover sm:px-5"
        >
          Back
        </Link>

        <Link
          href="/game"
          className="group inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-xl bg-primary-hover px-3 py-2 text-center text-sm font-semibold text-text-inverse shadow-sm transition-colors hover:bg-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover sm:gap-2 sm:px-7 sm:text-base"
        >
          <span className="min-w-0">Start Game</span>

          <MaterialIcon
            name="arrow_forward"
            size={18}
            className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </Link>
      </nav>
    </div>
  );
}
