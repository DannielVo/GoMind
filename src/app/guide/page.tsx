import type { Metadata } from "next";
import GuideHero from "@/components/guide/GuideHero";
import GuideTableOfContents from "@/components/guide/GuideTableOfContents";
import GuideCTA from "@/components/guide/GuideCTA";
import {
  IntroductionSection,
  BoardBasicsSection,
  LibertiesSection,
  CaptureSection,
  SpecialRulesSection,
  ScoringSection,
  StrategiesSection,
  GameControlsSection,
} from "@/components/guide/GuideSections";

export const metadata: Metadata = {
  title: "Learn How to Play Go | GoMind AI",
  description:
    "Learn Go board basics, liberties, captures, ko, territory, and Japanese-style scoring with illustrated examples.",
};

export default function GuidePage() {
  return (
    <div className="w-full bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <GuideHero />

        <div className="grid items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <GuideTableOfContents />

          <div
            id="guide-content"
            className="flex w-full min-w-0 max-w-[800px] flex-col gap-12 sm:gap-16"
          >
            <IntroductionSection />
            <BoardBasicsSection />
            <LibertiesSection />
            <CaptureSection />
            <SpecialRulesSection />
            <ScoringSection />
            <StrategiesSection />
            <GameControlsSection />
            <GuideCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
