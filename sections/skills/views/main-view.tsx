import React from "react";
import DevelopmentCycle from "../cards-list";
import { Icon } from "@iconify-icon/react";
import SkillItem from "../skill-item";

function SkillsSection({ color = "blue" }: { color: string }) {
  return (
    <section id="skills" className="py-26">
      <h2 className="z-10 text-center text-3xl font-medium tracking-tighter whitespace-pre-wrap dark:text-white">
        Not Just Coder
      </h2>
      <div className="flex flex-row items-center">
        <div className="flex-1 flex flex-col gap-2">
          <SkillItem
            color="blue"
            title="Planning Feature"
            subtitle=" Designing Notification System."
            icon="solar:calendar-broken"
          />
          <SkillItem
            color="green"
            title="Developing Feature"
            subtitle=" Developing Front-End of the section."
            icon="solar:code-bold"
          />
          <SkillItem
            color="blue"
            title="Planning Feature"
            subtitle=" Designing Notification System."
            icon="solar:calendar-broken"
          />
          <SkillItem
            color="red"
            title="Debugging"
            subtitle="Fixing Localization Issue"
            icon="lucide:bug"
          />
        </div>
        <div className="flex-1">
          <DevelopmentCycle />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
