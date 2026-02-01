import React from "react";
import TechStack from "../tech-stack";

function TechStackSection() {
  return (
    <section id="skills" className="py-10">
      <h2 className="z-10 text-center text-3xl font-medium tracking-tighter whitespace-pre-wrap dark:text-white">
        Tools & Technologies
      </h2>
      <div>
        <TechStack />
      </div>
    </section>
  );
}

export default TechStackSection;
