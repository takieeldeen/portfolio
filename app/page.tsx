import HeroSection from "@/sections/hero/views/main-view";
import SkillsSection from "@/sections/skills/views/main-view";

export default function Home() {
  return (
    <main className="spacy-y-32 px-6">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
