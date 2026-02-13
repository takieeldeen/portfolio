"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, ShieldCheck, Key } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function SecurityCard() {
  const t = useTranslations("SKILLS");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden h-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] dark:mask-[radial-gradient(300px_circle_at_center,rgba(255,255,255,0.3),transparent)]",
        )}
      />
      <CardHeader>
        <CardTitle>{t("SECURITY_TITLE")}</CardTitle>
        <CardDescription>{t("SECURITY_DESC")}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center pb-12 pt-6">
        <div className="relative">
          {/* Main Lock Container */}
          <div className="relative z-10 bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 shadow-xl">
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                rotate: isHovered ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {isHovered ? (
                <ShieldCheck
                  size={64}
                  className="text-green-500 transition-colors duration-300"
                />
              ) : (
                <Lock
                  size={64}
                  className="text-neutral-400 dark:text-neutral-500 transition-colors duration-300"
                />
              )}
            </motion.div>
          </div>

          {/* Floating Auth Elements */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 0 }}
                  animate={{ opacity: 1, x: -60, y: -20 }}
                  exit={{ opacity: 0, x: -20, y: 0 }}
                  className="absolute p-2 bg-blue-500 rounded-lg text-white shadow-lg z-20"
                >
                  <Key size={16} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -bottom-4 -right-4 px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full shadow-lg z-20"
                >
                  JWT VALID
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Background Aura */}
          <div
            className={cn(
              "absolute -inset-8 rounded-full blur-3xl -z-10 transition-colors duration-500",
              isHovered ? "bg-green-500/10" : "bg-blue-500/5",
            )}
          ></div>
        </div>

        {/* Large Decorative Icon */}
        <ShieldCheck
          className="absolute -bottom-10 -right-10 text-neutral-200 dark:text-neutral-800/50 rotate-12 transition-colors duration-500"
          size={160}
        />
      </CardContent>
    </Card>
  );
}

export default SecurityCard;
