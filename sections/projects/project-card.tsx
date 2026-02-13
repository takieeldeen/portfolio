"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string | null;
  imageColor: string;
  imageUri?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
  github,
  imageColor,
  imageUri,
}: ProjectCardProps) {
  const t = useTranslations("PROJECTS");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
    >
      {/* Decorative Image Placeholder */}
      <div
        className={cn(
          "aspect-video w-full relative overflow-hidden",
          imageColor,
        )}
      >
        <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="w-16 h-16 rounded-full border-4 border-white/30 animate-pulse" />
        </div>
        {imageUri && (
          <Image src={imageUri} alt={title} fill className="object-cover" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-500 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-bold text-neutral-900 dark:text-white hover:underline decoration-blue-500 underline-offset-4"
            >
              {t("LIVE_DEMO")}
              <ExternalLink size={14} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-bold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {t("GITHUB")}
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
