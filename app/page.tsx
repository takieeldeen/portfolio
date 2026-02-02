import HeroSection from "@/sections/hero/views/main-view";
import SkillsSection from "@/sections/skills/views/main-view";
import TechStackSection from "@/sections/tech-stack/views/main-view";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TechStackSection />
      <SkillsSection />
    </main>
  );
}
