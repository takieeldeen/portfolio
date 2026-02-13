import HeroSection from "@/sections/hero/views/main-view";
import ProjectsSection from "@/sections/projects/views/main-view";
import ImpactStatsSection from "@/sections/impact-stats/views/main-view";
import SkillsSection from "@/sections/skills/views/main-view";
import TechStackSection from "@/sections/tech-stack/views/main-view";
import WorkflowSection from "@/sections/workflow/views/main-view";
import ContactSection from "@/sections/contact/views/main-view";

export default function Home() {
  return (
    <main className="max-w-full overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <SkillsSection />
      <WorkflowSection />
      <ImpactStatsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
