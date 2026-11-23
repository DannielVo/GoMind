import MaterialIcon from "@/components/common/MaterialIcon";

export default function GameConfiguration() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <section aria-labelledby="setup-board-size">
        <h2
          id="setup-board-size"
          className="mb-2.5 text-base leading-tight font-semibold text-text-primary"
        >
          Board Size
        </h2>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-primary p-3 shadow-xs">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary-hover shadow-inner">
              <MaterialIcon name="grid_view" size={20} />
            </div>

            <p className="text-sm leading-snug font-bold text-text-primary">
              9 × 9
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-border bg-bg-secondary px-2 py-0.5 text-xs font-medium tracking-wide text-text-secondary">
            Fixed
          </span>
        </div>
      </section>

      <section aria-labelledby="setup-board-style">
        <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h2
            id="setup-board-style"
            className="text-base leading-tight font-semibold text-text-primary"
          >
            Board Style
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <article className="flex min-w-0 flex-col justify-between rounded-xl border-2 border-primary bg-primary-light p-3 shadow-xs">
            <div className="mb-2 flex items-center justify-between gap-1">
              <span className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-semibold tracking-wide text-primary-hover">
                Default
              </span>

              <MaterialIcon
                name="check_circle"
                size={18}
                className="text-primary-hover"
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-primary">
                Classic Wood
              </h3>

              <p className="mt-0.5 text-xs leading-snug text-text-secondary">
                Traditional wooden surface
              </p>
            </div>
          </article>

          <article
            aria-disabled="true"
            className="flex min-w-0 flex-col justify-between rounded-xl border border-border bg-bg-secondary/60 p-3"
          >
            <div className="mb-2 flex items-center">
              <span className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-md bg-primary-light px-1.5 py-0.5 text-[11px] leading-snug font-medium text-text-secondary">
                <MaterialIcon name="lock" size={12} />
                Coming Soon
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-secondary">
                Marble Stone
              </h3>

              <p className="mt-0.5 text-xs leading-snug text-text-secondary">
                Polished modern stone
              </p>
            </div>
          </article>
        </div>
      </section>

      <section aria-labelledby="setup-game-mode">
        <h2
          id="setup-game-mode"
          className="mb-2.5 text-base leading-tight font-semibold text-text-primary"
        >
          Game Mode
        </h2>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg-primary p-3 shadow-xs">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary-hover shadow-inner">
              <MaterialIcon name="smart_toy" size={20} />
            </div>

            <p className="text-sm leading-snug font-bold text-text-primary">
              Player vs AI
            </p>
          </div>

          <span className="shrink-0 rounded-md border border-border bg-bg-secondary px-2 py-0.5 text-xs font-medium tracking-wide text-text-secondary">
            Fixed
          </span>
        </div>
      </section>

      <div className="flex items-center gap-3 rounded-xl border border-border bg-primary-light p-3">
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center -space-x-1"
        >
          <span className="h-4 w-4 rounded-full bg-stone-black shadow-sm ring-2 ring-surface" />
          {/* <span className="h-4 w-4 rounded-full bg-stone-white shadow-sm ring-2 ring-surface" /> */}
        </div>

        <p className="text-xs leading-snug text-text-secondary">
          You will play as{" "}
          <strong className="font-semibold text-text-primary">Black</strong>{" "}
          (moves first) against GoMind AI.
        </p>
      </div>
    </div>
  );
}
