import MaterialIcon from "@/components/common/MaterialIcon";

const details = [
  {
    icon: "schedule",
    label: "8 Min Read",
    className: "text-success",
  },
  {
    icon: "grid_4x4",
    label: "9×9 Board",
    className: "text-warning",
  },
  {
    icon: "verified",
    label: "Japanese Scoring Primer",
    className: "text-primary-hover",
  },
] as const;

export default function GuideHero() {
  return (
    <header className="relative mb-12 max-w-3xl lg:mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
        Learn How to Play Go
      </h1>

      <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
        Everything you need to know before your first game. Explore 2,500 years
        of tactical depth through intuitive, minimalist principles.
      </p>

      <ul
        aria-label="Guide information"
        className="mt-6 flex flex-wrap items-center gap-3 text-xs text-text-secondary sm:gap-4"
      >
        {details.map((detail) => (
          <li
            key={detail.label}
            className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 shadow-sm hover:shadow-md transition-shadow"
          >
            <MaterialIcon
              name={detail.icon}
              size={16}
              className={detail.className}
            />
            {detail.label}
          </li>
        ))}
      </ul>
    </header>
  );
}
