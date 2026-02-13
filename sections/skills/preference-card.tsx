"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Languages, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

function PreferenceCard() {
  const [index, setIndex] = useState(0);

  const viewModes = [
    {
      lang: "English",
      dir: "ltr",
      theme: "light",
      text: "Designing for every preference",
      subtext: "LTR Support / Light Mode",
      bgColor: "bg-white",
      textColor: "text-neutral-900",
      icon: <Sun className="text-orange-500" size={18} />,
    },
    {
      lang: "Arabic",
      dir: "rtl",
      theme: "dark",
      text: "التصميم لكل التفضيلات",
      subtext: "دعم RTL / الوضع الليلي",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      icon: <Moon className="text-blue-400" size={18} />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % viewModes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [viewModes.length]);

  const current = viewModes[index];

  return (
    <Card className="relative overflow-hidden h-full">
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
        )}
      />
      <CardHeader>
        <CardTitle>Inclusivity & Localization</CardTitle>
        <CardDescription>
          Seamless support for multiple themes and languages.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center pb-10">
        <div className="relative w-full max-w-[240px] perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.lang}
              initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={cn(
                "rounded-2xl border-2 dark:border-neutral-700 border-neutral-200 p-6 shadow-xl aspect-video flex flex-col justify-center gap-2",
                current.bgColor,
              )}
              dir={current.dir as "ltr" | "rtl"}
            >
              <div className="flex items-center gap-2 mb-1">
                {current.icon}
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider opacity-60",
                    current.textColor,
                  )}
                >
                  {current.lang}
                </span>
              </div>
              <h4
                className={cn(
                  "text-lg font-bold leading-tight",
                  current.textColor,
                )}
              >
                {current.text}
              </h4>
              <p className={cn("text-[10px] opacity-70", current.textColor)}>
                {current.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Floating UI Elements */}
          <div className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg z-20">
            <Languages size={16} />
          </div>
        </div>

        {/* Large Decorative Icon */}
        <Languages
          className="absolute -bottom-8 -left-8 text-neutral-200 dark:text-neutral-800/50 rotate-12"
          size={140}
        />
      </CardContent>
    </Card>
  );
}

export default PreferenceCard;
