export const guideSections = [
  {
    id: "section-01",
    title: "Introduction",
    shortTitle: "Intro",
    badge: "Origin & Goal",
  },
  {
    id: "section-02",
    title: "Board Basics",
    shortTitle: "Board",
    badge: "Essential Rules",
  },
  {
    id: "section-03",
    title: "Liberties",
    shortTitle: "Liberties",
    badge: "Vital Principle",
  },
  {
    id: "section-04",
    title: "Capture",
    shortTitle: "Capture",
    badge: "Atari & Prisoners",
  },
  {
    id: "section-05",
    title: "Special Rules",
    shortTitle: "Rules",
    badge: "Essential Nuances",
  },
  {
    id: "section-06",
    title: "End Game & Scoring",
    shortTitle: "Scoring",
    badge: "Japanese Scoring",
  },
  {
    id: "section-07",
    title: "Basic Strategies",
    shortTitle: "Strategy",
    badge: "Mindful Tactics",
  },
  {
    id: "section-08",
    title: "Game Controls",
    shortTitle: "Controls",
    badge: "Interface Guide",
  },
] as const;

export type GuideSectionId = (typeof guideSections)[number]["id"];
