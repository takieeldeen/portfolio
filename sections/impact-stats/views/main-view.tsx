"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Briefcase, Code, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function ImpactStatsSection() {
  const t = useTranslations("STATS");

  const stats = [
    {
      label: t("EXPERIENCE"),
      value: 2,
      suffix: t("EXP_SUFFIX"),
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      label: t("PROJECTS"),
      value: 20,
      suffix: t("PROJ_SUFFIX"),
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      label: t("PERFORM"),
      value: 30,
      suffix: t("PERFORM_SUFFIX"),
      icon: <Zap className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: t("DELIVERY"),
      value: 100,
      suffix: t("DELIVERY_SUFFIX"),
      icon: <Sparkles className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 px-6 max-w-7xl mx-auto border-y border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 rounded-[3rem] my-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left group"
          >
            {/* Icon Circle */}
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                stat.bgColor,
                stat.color,
              )}
            >
              {stat.icon}
            </div>

            {/* Stat Value */}
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <p className="text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
