"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function MobileDesignCard() {
  const t = useTranslations("SKILLS");
  return (
    <Card className="relative overflow-hidden h-full row-span-1">
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
        )}
      />
      <CardHeader>
        <CardTitle>{t("MOBILE_TITLE")}</CardTitle>
        <CardDescription>{t("MOBILE_DESC")}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Phone Frame */}
          <div className="relative mx-auto border-neutral-800 dark:border-neutral-700 bg-neutral-800 border-[6px] rounded-[2rem] h-[280px] w-[140px] shadow-2xl transition-transform duration-500 group-hover:scale-105">
            {/* Speaker/Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-800 rounded-b-xl z-20"></div>

            {/* Screen Content */}
            <div className="rounded-[1.6rem] overflow-hidden w-full h-full bg-neutral-50 dark:bg-neutral-900 p-3 flex flex-col gap-3">
              <div className="mt-4 flex flex-col gap-2">
                <Skeleton className="h-3 w-1/2 rounded-full" />
                <Skeleton className="h-24 w-full rounded-xl" />
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Skeleton className="h-10 w-full rounded-lg" />
                  <Skeleton className="h-10 w-full rounded-lg" />
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  <Skeleton className="h-3 w-full rounded-full" />
                  <Skeleton className="h-3 w-3/4 rounded-full" />
                  <Skeleton className="h-3 w-5/6 rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
          </div>

          {/* Background Highlight */}
          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Large Background Icon */}
        <Smartphone
          className="absolute -bottom-8 -right-8 text-neutral-200 dark:text-neutral-800/50 -rotate-12"
          size={160}
        />
      </CardContent>
    </Card>
  );
}

export default MobileDesignCard;
