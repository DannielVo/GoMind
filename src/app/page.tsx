import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HomeCTASection from "@/components/home/HomeCTASection";

export default function HomePage() {
  return (
    <main className="w-full bg-bg-primary">
      <HeroSection />

      <div
        aria-hidden="true"
        className="h-px bg-linear-to-r from-transparent via-border to-transparent"
      />

      <ExperienceSection />
      <HomeCTASection />
    </main>
  );
}
