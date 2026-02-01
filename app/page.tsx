import HeroSection from "@/sections/hero/views/main-view";
import SkillsSection from "@/sections/skills/views/main-view";
import TechStackSection from "@/sections/tech-stack/views/main-view";

export default function Home() {
  return (
    <main className=" px-6">
      <HeroSection />
      <TechStackSection />
      <SkillsSection />
    </main>
  );
}
