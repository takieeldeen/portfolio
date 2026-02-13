"use client";
import React from "react";
import ProjectCard from "../project-card";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("PROJECTS");

  const projects = [
    {
      title: t("AGZ_B2B_TITLE"),
      description: t("AGZ_B2B_DESC"),
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "React Query", "Zod"],
      imageColor: "bg-linear-to-br from-emerald-500 to-teal-600",
      imageUri:
        "https://media.licdn.com/dms/image/v2/D4D22AQF9M-H87aeb0g/feedshare-shrink_2048_1536/B4DZsS5hlpJIA0-/0/1765548634514?e=1772668800&v=beta&t=vqNj6f99E4YU9nH_bKSuaE614lCALBaefVYDqgUGurw",
      link: "https://agzakhana-backoffice-igil.vercel.app/en",
      github: null,
    },
    {
      title: t("AGZ_B2C_TITLE"),
      description: t("AGZ_B2C_DESC"),
      techStack: ["Next.js 15", "React 19", "TS", "Stripe", "Leaflet", "i18n"],
      imageColor: "bg-linear-to-br from-blue-500 to-indigo-600",
      imageUri:
        "https://media.licdn.com/dms/image/v2/D4D22AQFNp9vp2JDfeA/feedshare-shrink_2048_1536/B4DZnOjVAGIgAw-/0/1760107014896?e=1772668800&v=beta&t=lIZyD8DWy1YxKavfsPa3QIVga-hvScApaHCZApoktzw",
      link: "https://agzakhana-public.vercel.app/ar",
      github: "https://github.com/takieeldeen/agzakhana-public",
    },
    {
      title: t("ESTATEIN_TITLE"),
      description: t("ESTATEIN_DESC"),
      techStack: ["Next.js", "React", "Supabase", "Puppeteer", "Tailwind"],
      imageColor: "bg-linear-to-br from-purple-500 to-pink-600",
      imageUri:
        "https://media.licdn.com/dms/image/v2/D4D22AQHaaIuUjH6e2g/feedshare-shrink_800/feedshare-shrink_800/0/1715319874826?e=1772668800&v=beta&t=hB8rYDsLtdbSa609bd7vtFSFBKosXnUu-X2cNjqv_wo",
      link: "https://estatein-fsgl.vercel.app",
      github: "https://lnkd.in/dkQ7Un8k",
    },
    {
      title: t("INVOO_TITLE"),
      description: t("INVOO_DESC"),
      techStack: ["React", "React Query", "Supabase", "PostgreSQL", "Tailwind"],
      imageColor: "bg-linear-to-br from-orange-500 to-red-600",
      imageUri:
        "https://media.licdn.com/dms/image/v2/D4D22AQF3qs2TXPJWWw/feedshare-shrink_1280/feedshare-shrink_1280/0/1711378312280?e=1772668800&v=beta&t=u-Ug_odQBzyFUfHmNRNsshaCPt30C8RCpPVyv-qqR9s",
      link: "https://invoo.netlify.app/",
      github: "https://github.com/takieeldeen/invoices-management-app",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
          {t("TITLE")}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          {t("SUBTITLE")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
