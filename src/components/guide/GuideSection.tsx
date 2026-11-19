import type { ReactNode } from "react";

import { guideSections, type GuideSectionId } from "./guide-data";
import styles from "./guide.module.css";

type GuideSectionProps = {
  id: GuideSectionId;
  children: ReactNode;
};

export default function GuideSection({ id, children }: GuideSectionProps) {
  const index = guideSections.findIndex((section) => section.id === id);
  const section = guideSections[index];

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      tabIndex={-1}
      className={`${styles.section} rounded-xl bg-surface p-5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover sm:p-8`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <h2
          id={`${id}-heading`}
          className="flex min-w-0 items-baseline gap-2 text-2xl font-bold text-text-primary"
        >
          <span className="shrink-0 text-primary-hover">
            {String(index + 1).padStart(2, "0")}.
          </span>

          <span>{section.title}</span>
        </h2>

        <span className="shrink-0 rounded bg-primary-light px-2.5 py-1 text-xs font-medium text-primary-hover">
          {section.badge}
        </span>
      </div>

      {children}
    </section>
  );
}
