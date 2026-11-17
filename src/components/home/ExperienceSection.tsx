import Link from "next/link";

import MaterialIcon from "@/components/common/MaterialIcon";

const features = [
  {
    icon: "psychology",
    title: "Challenge Your Mind",
    description:
      "Practice strategic thinking with every stone. Balance territory, influence, and calm tactical foresight in a mindful, unhurried space.",
    detail: "Spatial foresight",
  },
  {
    icon: "smart_toy",
    title: "Play Against AI",
    description:
      "Face an attentive computer opponent powered by smart tree search. Balanced play calibrated to challenge both beginners and seasoned strategists.",
    detail: "Adaptive difficulty",
  },
  {
    icon: "grid_4x4",
    title: "Simple 9×9 Board",
    description:
      "Enjoy focused encounters on a compact board. High-impact 10-minute sessions that preserve the rich, profound elegance of traditional Go.",
    detail: "Quick 10-min games",
  },
] as const;

export default function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-bg-secondary px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-hover uppercase">
            The GoMind Experience
          </p>

          <h2
            id="experience-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
          >
            A Mindful Approach to Strategy
          </h2>

          <p className="text-base leading-relaxed text-text-secondary">
            Crafted for peaceful focus, tactical growth, and accessible gameplay
            anytime without distractions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-xl bg-surface p-7 shadow-sm lg:p-8 hover:shadow-lg transition-all"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary-hover">
                <MaterialIcon name={feature.icon} size={26} />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>

              <p className="grow text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>

              <p className="mt-6 flex items-center gap-1 pt-4 text-xs font-semibold text-primary-hover">
                {feature.detail}
                <MaterialIcon name="arrow_outward" size={14} />
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl bg-surface/60 p-6 shadow-sm md:flex-row md:p-8">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-board/30 text-board-line">
              <MaterialIcon name="lightbulb" size={20} />
            </div>

            <div>
              <h3 className="text-base font-semibold text-text-primary">
                First time playing Go?
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                Learn liberties, capturing, and territory rules in under 3
                minutes.
              </p>
            </div>
          </div>

          <Link
            href="/guide"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg text-center text-sm font-semibold text-primary-hover transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover"
          >
            View Interactive Guide
            <MaterialIcon name="chevron_right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
