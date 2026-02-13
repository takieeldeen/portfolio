import React from "react";
import TechStack from "../tech-stack";
import { useTranslations } from "next-intl";

function TechStackSection() {
  const t = useTranslations("TECH");

  return (
    <section id="stack" className="py-10 bg-neutral-100 dark:bg-neutral-950">
      <h2 className="z-10 text-center text-3xl font-medium tracking-tighter whitespace-pre-wrap dark:text-white">
        {t("TITLE")}
      </h2>
      <div>
        <TechStack />
      </div>
    </section>
  );
}

export default TechStackSection;
