"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code2, Rocket, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const workflowSteps = [
  {
    title: "1. Discovery",
    description:
      "Deep dive into your goals, target audience, and project requirements to set a solid foundation.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "2. Design",
    description:
      "Designing intuitive UI/UX and architecting the system structure for scalability and performance.",
    icon: <Layout className="w-6 h-6" />,
    color: "bg-purple-500",
    shadow: "shadow-purple-500/20",
  },
  {
    title: "3. Build",
    description:
      "Turning designs into reality with clean, performant code and modern engineering practices.",
    icon: <Code2 className="w-6 h-6" />,
    color: "bg-green-500",
    shadow: "shadow-green-500/20",
  },
  {
    title: "4. Launch",
    description:
      "Rigorous testing followed by a smooth deployment and post-launch monitoring for success.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-orange-500",
    shadow: "shadow-orange-500/20",
  },
];

export default function WorkflowSection() {
  return (
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
          How I Work
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          From the first idea to the final product, I follow a refined process
          designed to deliver high-quality results predictably and efficiently.
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
            Ready to start your project?
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Let&apos;s turn your vision into a professional digital solution.
          </p>
        </div>
        <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
          Book a Discovery Call
          <ExternalLink size={16} />
        </button>
      </motion.div>
    </section>
  );
}
