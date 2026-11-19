import type { ReactNode } from "react";
import MaterialIcon from "@/components/common/MaterialIcon";
import GuideBoardDiagram from "./GuideBoardDiagram";
import GuideSection from "./GuideSection";

function DiagramFigure({
  title,
  caption,
  children,
}: {
  title?: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex min-w-0 flex-col items-center rounded-xl bg-bg-secondary p-4">
      {title && (
        <p className="mb-3 text-center text-sm font-semibold text-text-primary">
          {title}
        </p>
      )}

      <div className="w-full max-w-[420px]">{children}</div>

      <figcaption className="mt-3 text-center text-xs leading-relaxed text-text-secondary">
        {caption}
      </figcaption>
    </figure>
  );
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-xl bg-bg-secondary p-5">
      <h3 className="mb-2 flex items-start gap-2 text-base font-semibold text-text-primary">
        <MaterialIcon
          name={icon}
          size={22}
          className="mt-0.5 text-primary-hover"
        />
        {title}
      </h3>

      <div className="text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </article>
  );
}

function RuleBlock({
  letter,
  title,
  children,
}: {
  letter: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-xl bg-bg-secondary p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-hover text-sm font-bold text-text-inverse">
          {letter}
        </span>

        <h3 className="pt-1 text-base font-bold text-text-primary">{title}</h3>
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </article>
  );
}

export function IntroductionSection() {
  return (
    <GuideSection id="section-01">
      <p className="mb-6 leading-relaxed text-text-secondary">
        The objective of Go is simple yet profound:{" "}
        <strong className="font-semibold text-text-primary">
          finish with a higher score than your opponent.
        </strong>{" "}
        Under Japanese-style scoring, territory and prisoners contribute to your
        score, with komi added for White. Originating over 2,500 years ago, Go
        rewards balance, connection, and careful judgment rather than pure
        elimination.
      </p>

      <DiagramFigure caption="A 9×9 board has 81 intersections. Coordinates skip the letter I; five star points help you find your way around the board.">
        <GuideBoardDiagram variant="board" idPrefix="guide-introduction" />
      </DiagramFigure>
    </GuideSection>
  );
}

const boardBasics = [
  {
    number: "1",
    title: "On Intersections",
    description:
      "Stones are played on grid-line intersections, never inside square boxes.",
  },
  {
    number: "2",
    title: "Alternating Turns",
    description:
      "In an even game, Black moves first. White replies. Players alternate placing a stone or passing.",
  },
  {
    number: "3",
    title: "Permanent Placement",
    description:
      "A stone stays on its intersection unless it is captured. Stones do not slide around the board.",
  },
] as const;

export function BoardBasicsSection() {
  return (
    <GuideSection id="section-02">
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {boardBasics.map((item) => (
          <article key={item.number} className="rounded-xl bg-bg-secondary p-4">
            <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-hover text-sm font-bold text-text-inverse">
              {item.number}
            </span>

            <h3 className="mb-2 text-sm font-bold text-text-primary">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <DiagramFigure caption="Place stones directly where a horizontal and vertical line cross. The crossed-out stone is inside a square and is not a legal placement.">
        <GuideBoardDiagram variant="placement" idPrefix="guide-placement" />
      </DiagramFigure>
    </GuideSection>
  );
}

export function LibertiesSection() {
  return (
    <GuideSection id="section-03">
      <p className="mb-6 leading-relaxed text-text-secondary">
        Every stone breathes through its{" "}
        <strong className="font-semibold text-text-primary">liberties</strong>
        —the directly adjacent horizontal and vertical empty intersections.{" "}
        <strong className="font-semibold text-primary-hover">
          Diagonals do not count!
        </strong>{" "}
        Stones of the same color connected along grid lines form a group and
        share their liberties. Count each distinct empty intersection only once.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <DiagramFigure
          title="Center Stone: 4 Liberties"
          caption="Dashed rings are liberties. Crosses show diagonal points that do not count."
        >
          <GuideBoardDiagram
            variant="center-liberties"
            idPrefix="guide-center-liberties"
          />
        </DiagramFigure>

        <DiagramFigure
          title="Corner Stone: 2 Liberties"
          caption="An isolated corner stone starts with two liberties. An isolated edge stone starts with three."
        >
          <GuideBoardDiagram
            variant="corner-liberties"
            idPrefix="guide-corner-liberties"
          />
        </DiagramFigure>

        <DiagramFigure
          title="Connected: 6 Shared Liberties"
          caption="These two connected stones share six distinct liberties and are captured as one group."
        >
          <GuideBoardDiagram
            variant="connected-liberties"
            idPrefix="guide-connected-liberties"
          />
        </DiagramFigure>
      </div>
    </GuideSection>
  );
}

export function CaptureSection() {
  return (
    <GuideSection id="section-04">
      <p className="mb-6 leading-relaxed text-text-secondary">
        When a stone or connected group has only one remaining liberty, it is in{" "}
        <strong className="font-semibold text-text-primary">atari</strong>.
        Playing on that final liberty captures the group. The captured stones
        are removed from the board and kept as prisoners by the capturing
        player.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <DiagramFigure
          title="Before Capture: Atari"
          caption="White has one liberty on the right. Black can occupy that point to capture White."
        >
          <GuideBoardDiagram variant="atari" idPrefix="guide-atari" />
        </DiagramFigure>

        <DiagramFigure
          title="After Capture"
          caption="White is removed. Black gains one prisoner; the orange marker identifies Black’s latest move."
        >
          <GuideBoardDiagram variant="capture" idPrefix="guide-capture" />
        </DiagramFigure>
      </div>
    </GuideSection>
  );
}

export function SpecialRulesSection() {
  return (
    <GuideSection id="section-05">
      <div className="space-y-6">
        <RuleBlock letter="A" title="Ko: No Immediate Recapture">
          <p>
            After a single-stone ko capture, the opponent{" "}
            <strong className="font-semibold text-text-primary">
              cannot immediately recapture
            </strong>{" "}
            to restore the previous board position. They must first play
            elsewhere or pass. After the other player responds, recapture may be
            possible if the ko has not been connected.
          </p>

          <div className="grid gap-4 xl:grid-cols-2">
            <DiagramFigure
              title="Step 1: Black Captures"
              caption="The marked black stone has just captured one white stone. Its only liberty is the dashed point on the right."
            >
              <GuideBoardDiagram
                variant="ko-capture"
                idPrefix="guide-ko-capture"
              />
            </DiagramFigure>

            <DiagramFigure
              title="Step 2: Immediate Recapture Forbidden"
              caption="White cannot immediately play at the crossed point, because this would recreate the position before Black’s capture."
            >
              <GuideBoardDiagram
                variant="ko-recapture"
                idPrefix="guide-ko-recapture"
              />
            </DiagramFigure>
          </div>
        </RuleBlock>

        <RuleBlock letter="B" title="No Suicide Rule">
          <p>
            A move is illegal if your newly placed stone and its connected group
            have{" "}
            <strong className="font-semibold text-text-primary">
              no liberties after opposing captures are resolved.
            </strong>{" "}
            An apparently surrounded move can be legal when it captures enemy
            stones and creates liberties. Connecting to a friendly group that
            has liberties is also legal.
          </p>

          <div className="grid gap-4 xl:grid-cols-2">
            <DiagramFigure
              title="Illegal Suicide Move"
              caption="White cannot play at the crossed point: its group would have no liberties, and no black stones would be captured."
            >
              <GuideBoardDiagram variant="suicide" idPrefix="guide-suicide" />
            </DiagramFigure>

            <DiagramFigure
              title="Legal Capture Move"
              caption="After White plays at the top-left corner, the adjacent black stone to its right is captured. The dashed point becomes White’s liberty."
            >
              <GuideBoardDiagram
                variant="legal-capture"
                idPrefix="guide-legal-capture"
              />
            </DiagramFigure>
          </div>
        </RuleBlock>

        <RuleBlock letter="C" title="Passing & Match Progression">
          <p>
            You may{" "}
            <strong className="font-semibold text-text-primary">pass</strong>{" "}
            instead of placing a stone. Players often pass when they believe no
            useful moves remain. Passing is allowed even when legal moves are
            still available.
          </p>

          <p>
            Two consecutive passes stop play for confirmation of life, death,
            and territory. This is different from resigning.
          </p>
        </RuleBlock>
      </div>
    </GuideSection>
  );
}

const scoringExamples = [
  {
    color: "Black",
    territory: 22,
    prisoners: 3,
    komi: 0,
    total: "25.0",
    winner: false,
  },
  {
    color: "White",
    territory: 19,
    prisoners: 2,
    komi: 5.5,
    total: "26.5",
    winner: true,
  },
] as const;

export function ScoringSection() {
  return (
    <GuideSection id="section-06">
      <p className="mb-4 leading-relaxed text-text-secondary">
        A game can stop for scoring or end by resignation. This section
        introduces Japanese-style territory scoring; the playable engine ruleset
        has not yet been configured in the current frontend.
      </p>

      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <InfoCard icon="handshake" title="Two Consecutive Passes">
          <p>
            Two consecutive passes stop play. Under Japanese rules, players then
            confirm life, death, and territory before agreeing that the game is
            over. Play can resume if needed.
          </p>
        </InfoCard>

        <InfoCard icon="flag" title="Resignation">
          <p>
            A player may concede the game. The opponent wins by resignation
            without a territory-score calculation.
          </p>
        </InfoCard>
      </div>

      <div className="mb-6 rounded-xl bg-bg-secondary p-5">
        <h3 className="mb-2 text-base font-bold text-text-primary">
          How Territory & Komi Work
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          <strong className="font-semibold text-text-primary">Territory</strong>{" "}
          consists of empty intersections enclosed by living stones, excluding
          neutral points and territory in seki under Japanese rules. Agreed dead
          stones are removed and added to the prisoners before counting. Each
          territory point and each prisoner contributes one point.
        </p>

        <aside className="rounded-lg border-l-4 border-warning bg-surface p-4 text-sm leading-relaxed text-text-secondary">
          <h4 className="mb-1 font-semibold text-text-primary">
            White Compensation: Komi
          </h4>

          <p>
            In an even game, Black moves first. White receives compensation
            points called <strong className="text-text-primary">komi</strong>.
            The example below uses 5.5 points for illustration; it does not set
            the engine’s komi. A half-point komi prevents a tied numerical
            score.
          </p>
        </aside>
      </div>

      <DiagramFigure caption="Illustrative 7×7 territory sketch. Boundary stones are assumed alive; squares identify example territory points. This is not a finished position or the source of the totals below.">
        <GuideBoardDiagram variant="territory" idPrefix="guide-territory" />
      </DiagramFigure>

      <p className="my-6 rounded-lg bg-primary-light p-4 text-center text-sm font-semibold leading-relaxed text-primary-hover">
        Total Score = Territory + Prisoners
        <br />
        Add Komi for White
      </p>

      <div className="rounded-xl border border-border bg-bg-secondary p-4 sm:p-6">
        <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-text-primary">
          <MaterialIcon
            name="calculate"
            size={22}
            className="text-primary-hover"
          />
          Scoring Breakdown Example: 9×9 Match
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {scoringExamples.map((example) => (
            <article
              key={example.color}
              className={[
                "rounded-xl border bg-surface p-4",
                example.winner ? "border-primary-hover" : "border-border",
              ].join(" ")}
            >
              {example.winner && (
                <p className="mb-3 inline-block rounded bg-primary-hover px-2.5 py-1 text-xs font-bold text-text-inverse">
                  Winner +1.5
                </p>
              )}

              <h4 className="mb-3 flex items-center gap-2 border-b border-border pb-3 text-sm font-bold text-text-primary">
                <span
                  aria-hidden="true"
                  className={[
                    "h-3.5 w-3.5 rounded-full",
                    example.color === "Black"
                      ? "bg-stone-black"
                      : "border border-board-line bg-stone-white",
                  ].join(" ")}
                />
                {example.color}
              </h4>

              <dl className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between gap-3">
                  <dt>Territory</dt>
                  <dd className="font-semibold text-text-primary">
                    {example.territory} pts
                  </dd>
                </div>

                <div className="flex justify-between gap-3">
                  <dt>Prisoners</dt>
                  <dd className="font-semibold text-text-primary">
                    {example.prisoners} pts
                  </dd>
                </div>

                <div className="flex justify-between gap-3">
                  <dt>Illustrative komi</dt>
                  <dd className="font-semibold text-text-primary">
                    {example.komi} pts
                  </dd>
                </div>

                <div className="flex justify-between gap-3 border-t border-border pt-3">
                  <dt className="font-semibold">Total Score</dt>
                  <dd className="text-lg font-bold text-text-primary">
                    {example.total} pts
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-text-secondary">
          White wins by 1.5 points:{" "}
          <strong className="text-text-primary">W+1.5</strong>. The example uses
          5.5 komi only; actual engine rules and komi remain unverified.
        </p>
      </div>
    </GuideSection>
  );
}

const strategies = [
  {
    icon: "shield",
    title: "Protect Your Liberties",
    description:
      "Watch the liberties of your groups. Isolated stones can be cut off and driven into atari, while healthy connections often make groups harder to capture.",
  },
  {
    icon: "dashboard",
    title: "Control Corners First",
    description:
      "“Corners are gold, sides are silver, center is grass.” Board edges help enclose territory, so corners often offer efficient early development.",
  },
  {
    icon: "hub",
    title: "Connect Solidly",
    description:
      "Diagonal stones are not one connected group. Check whether they can be cut, and connect along grid lines when necessary.",
  },
  {
    icon: "self_improvement",
    title: "Think Before You Follow",
    description:
      "Do not automatically answer every move. Ask whether your group is actually threatened or whether playing elsewhere—tenuki—would gain more.",
  },
] as const;

export function StrategiesSection() {
  return (
    <GuideSection id="section-07">
      <p className="mb-6 leading-relaxed text-text-secondary">
        Mastering Go takes practice. In your first 9×9 games, these four ideas
        can help build your board awareness.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {strategies.map((strategy) => (
          <InfoCard
            key={strategy.title}
            icon={strategy.icon}
            title={strategy.title}
          >
            <p>{strategy.description}</p>
          </InfoCard>
        ))}
      </div>
    </GuideSection>
  );
}

const controls = [
  {
    icon: "touch_app",
    title: "Place Stone",
    description: "Play a stone on a legal, empty intersection.",
    status:
      "Reference action. Desktop and mobile placement controls are not implemented yet.",
  },
  {
    icon: "undo",
    title: "Undo",
    description: "An optional practice aid for taking back a move.",
    status:
      "Not implemented. No Ctrl+Z shortcut or automatic rollback of the AI response is currently available.",
  },
  {
    icon: "redo",
    title: "Redo",
    description: "An optional practice aid for replaying an undone move.",
    status:
      "Not implemented. No Ctrl+Y shortcut or move-tree navigation is currently available.",
  },
  {
    icon: "motion_photos_paused",
    title: "Pass Turn",
    description: "Yield your turn without placing a stone.",
    status:
      "Rule concept only. A live-game Pass control is not implemented yet.",
  },
  {
    icon: "flag",
    title: "Resign Match",
    description: "Concede the game and award the opponent a win.",
    status:
      "Rule concept only. A resign control and confirmation dialog are not implemented yet.",
  },
  {
    icon: "arrow_back",
    title: "Back to Setup",
    description: "Return to the game-configuration page.",
    status:
      "The Guide CTA links to /setup. Saving or restoring an in-progress game is not implemented.",
  },
] as const;

export function GameControlsSection() {
  return (
    <GuideSection id="section-08">
      <p className="mb-6 leading-relaxed text-text-secondary">
        These cards explain common Go controls. The playable board is not
        implemented in the current frontend, so they describe reference concepts
        rather than available gameplay actions.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {controls.map((control) => (
          <article
            key={control.title}
            className="flex flex-col rounded-xl border border-border bg-bg-secondary p-5"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary-hover">
              <MaterialIcon name={control.icon} size={22} />
            </div>

            <h3 className="mb-2 text-base font-bold text-text-primary">
              {control.title}
            </h3>

            <p className="mb-4 grow text-sm leading-relaxed text-text-secondary">
              {control.description}
            </p>

            <p className="border-t border-border pt-3 text-xs leading-relaxed text-text-secondary">
              {control.status}
            </p>
          </article>
        ))}
      </div>
    </GuideSection>
  );
}
