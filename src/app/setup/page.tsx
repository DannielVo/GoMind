import type { Metadata } from "next";
import GameConfiguration from "@/components/setup/GameConfiguration";
import SetupBoardPreview from "@/components/setup/SetupBoardPreview";
import SetupActions from "@/components/setup/SetupActions";

export const metadata: Metadata = {
  title: "Game Setup | GoMind AI",
  description:
    "View the GoMind AI game setup: a 9×9 Classic Wood board, Player vs AI, and Black moving first.",
};

export default function GameSetupPage() {
  return (
    <div
      aria-labelledby="setup-heading"
      className="relative isolate w-full overflow-hidden bg-bg-primary px-4 py-8 sm:px-6 md:py-12 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-[940px] flex-col">
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8">
          <header className="border-b border-border pb-6 text-center">
            <h1
              id="setup-heading"
              className="text-2xl leading-tight font-bold tracking-tight text-text-primary md:text-[26px]"
            >
              Game Setup
            </h1>
          </header>

          <div className="mt-6 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <GameConfiguration />
            <SetupBoardPreview />
          </div>

          <SetupActions />
        </div>
      </div>
    </div>
  );
}
