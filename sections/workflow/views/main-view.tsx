"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code2, Rocket, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function WorkflowSection() {
  const t = useTranslations("WORKFLOW");

  const workflowSteps = [
    {
      title: t("STEP1_TITLE"),
      description: t("STEP1_DESC"),
      icon: <Search className="w-6 h-6" />,
      color: "bg-blue-500",
      shadow: "shadow-blue-500/20",
    },
    {
      title: t("STEP2_TITLE"),
      description: t("STEP2_DESC"),
      icon: <Layout className="w-6 h-6" />,
      color: "bg-purple-500",
      shadow: "shadow-purple-500/20",
    },
    {
      title: t("STEP3_TITLE"),
      description: t("STEP3_DESC"),
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-green-500",
      shadow: "shadow-green-500/20",
    },
    {
      title: t("STEP4_TITLE"),
      description: t("STEP4_DESC"),
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-orange-500",
      shadow: "shadow-orange-500/20",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
          {t("TITLE")}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t("SUBTITLE")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-neutral-200 dark:bg-neutral-800 -z-10" />

        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon Bubble */}
            <div
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                step.color,
                "text-white shadow-lg",
                step.shadow,
              )}
            >
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 dark:text-neutral-100">
              {step.title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed px-4">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Freelance CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-bold dark:text-white">
            {t("CTA_TITLE")}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {t("CTA_SUBTITLE")}
          </p>
        </div>
        <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
          {t("CTA_BUTTON")}
          <ExternalLink size={16} />
        </button>
      </motion.div>
    </section>
  );
}
