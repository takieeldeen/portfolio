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
import { Monitor, Smartphone, Tablet } from "lucide-react";
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
      <CardContent className="flex items-center justify-center pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-[300px] h-[200px]"
        >
          {/* Monitor Frame */}
          <div className="absolute top-0 left-0 w-[240px] h-[150px] border-[6px] border-neutral-800 dark:border-neutral-700 rounded-xl bg-neutral-800 shadow-2xl z-10 overflow-hidden">
            <div className="w-full h-full bg-neutral-50 dark:bg-neutral-900 p-2 flex flex-col gap-2">
              <div className="flex items-center gap-1 border-b pb-1 mb-1">
                <div className="size-1.5 rounded-full bg-red-400" />
                <div className="size-1.5 rounded-full bg-yellow-400" />
                <div className="size-1.5 rounded-full bg-green-400" />
              </div>
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-16 w-full" />
              <div className="grid grid-cols-3 gap-1">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-6 bg-neutral-800 dark:bg-neutral-700 hidden" />
          </div>

          {/* Smartphone Frame (Overlapping) */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-4 right-4 w-[65px] h-[130px] border-[4px] border-neutral-800 dark:border-neutral-700 rounded-2xl bg-neutral-800 shadow-2xl z-20 overflow-hidden"
          >
            <div className="w-full h-full bg-neutral-50 dark:bg-neutral-900 p-1.5 flex flex-col gap-1.5">
              <div className="w-6 h-1 bg-neutral-800 dark:bg-neutral-700 mx-auto rounded-full mt-0.5" />
              <Skeleton className="h-2 w-1/2 mt-1" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          </motion.div>

          {/* Tablet/Background Accent */}
          <div className="absolute -top-4 -left-4 w-[260px] h-[170px] bg-blue-500/10 blur-3xl -z-10 rounded-full" />
        </motion.div>

        {/* Large Background Icons */}
        <div className="absolute -bottom-4 -right-4 flex gap-2 opacity-10 dark:opacity-5 transform rotate-[-10deg]">
          <Monitor size={100} />
          <Tablet size={80} className="mt-4" />
          <Smartphone size={60} className="mt-8" />
        </div>
      </CardContent>
    </Card>
  );
}

export default MobileDesignCard;
